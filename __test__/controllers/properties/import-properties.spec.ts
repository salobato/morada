import { ImportPropertiesController } from '@app/controllers/properties/import-properties'
import { HttpRequest } from '@app/protocols/http'

import { fileFactory } from '@test/mocks/core/File'
import { ReadFactorySpy } from '@test/mocks/readFactory'

const sutFactory = () => {
  const readFactorySpy = new ReadFactorySpy()
  const sut = new ImportPropertiesController(readFactorySpy)

  return {
    sut,
    readFactorySpy
  }
}
const requestFactory = (): HttpRequest => {
  return {
    file: fileFactory()
  }
}
describe('Import Properties Controller', () => {
  it('should call read file service', () => {
    const { sut, readFactorySpy } = sutFactory()
    const request = requestFactory()
    const buffer = request.file.content
    sut.handle(request)

    expect(readFactorySpy.params).toBe(buffer)
  })
})
