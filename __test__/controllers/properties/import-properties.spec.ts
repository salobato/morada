import { ok, serverError } from '@app/controllers/helpers/http-response'
import { ImportPropertiesController } from '@app/controllers/properties/import-properties'
import { HttpRequest } from '@app/controllers/protocols/http'

import { fileFactory } from '@test/mocks/core/File'
import { throwError } from '@test/mocks/core/helpers'
import { CreatePropertiesFactorySpy } from '@test/mocks/services/properties/createPropertiesFactory'
import { ReadFactorySpy } from '@test/mocks/services/protocols/readFactory'

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
const requestFactory = (): HttpRequest => {
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

    expect(response).toEqual(ok(createPropertiesFactorySpy.result))
  })
})
