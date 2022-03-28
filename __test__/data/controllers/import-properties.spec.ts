import { File } from '@app/core/entities'
import { ok, serverError } from '@app/data/helpers'
import { ImportPropertiesController } from '@app/data/controllers'

import { fileFactory, throwError } from '@test/mocks/core'
import { CreatePropertiesFactorySpy } from '@test/mocks/services'
import { ReadFactorySpy } from '@test/mocks/protocols'

interface Request {
  file: File
}

const sutFactory = () => {
  const readFactorySpy = new ReadFactorySpy()
  const createPropertiesFactorySpy = new CreatePropertiesFactorySpy()
  const sut = new ImportPropertiesController(
    readFactorySpy,
    createPropertiesFactorySpy
  )

  return {
    sut,
    readFactorySpy,
    createPropertiesFactorySpy
  }
}

const requestFactory = (): Request => {
  return {
    file: fileFactory()
  }
}

describe('Import Properties Controller', () => {
  it('should call read file service with correct value', async () => {
    const { sut, readFactorySpy } = sutFactory()
    const request = requestFactory()
    const buffer = request.file.content

    await sut.handle(request)

    expect(readFactorySpy.params).toBe(buffer)
  })

  it('should call create properties with correct values', async () => {
    const { sut, readFactorySpy, createPropertiesFactorySpy } = sutFactory()
    const request = requestFactory()
    const properties = readFactorySpy.result

    await sut.handle(request)

    expect(createPropertiesFactorySpy.params).toEqual(properties)
  })

  it('should return 500 if read file throws', async () => {
    const { sut, readFactorySpy } = sutFactory()
    jest.spyOn(readFactorySpy, 'read').mockImplementationOnce(throwError)
    const response = await sut.handle(requestFactory())

    expect(response).toEqual(serverError(new Error()))
  })

  it('should return 500 if create properties throws', async () => {
    const { sut, createPropertiesFactorySpy } = sutFactory()
    jest
      .spyOn(createPropertiesFactorySpy, 'create')
      .mockImplementationOnce(throwError)
    const response = await sut.handle(requestFactory())

    expect(response).toEqual(serverError(new Error()))
  })

  it('should return 200 on success', async () => {
    const { sut, createPropertiesFactorySpy } = sutFactory()
    const response = await sut.handle(requestFactory())

    expect(response).toEqual(ok({ count: createPropertiesFactorySpy.result }))
  })
})
