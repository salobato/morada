import { ImportPropertiesController } from '@app/controllers/properties/import-properties'
import { HttpRequest } from '@app/controllers/protocols/http'

import { fileFactory } from '@test/mocks/core/File'
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

    sut.handle(request)

    expect(readFactorySpy.params).toBe(buffer)
  })

  it('should call create properties with correct values', async () => {
    const { sut, readFactorySpy, createPropertiesFactorySpy } = sutFactory()
    const request = requestFactory()
    const properties = readFactorySpy.result

    sut.handle(request)

    expect(createPropertiesFactorySpy.params).toEqual(properties)
  })
})
