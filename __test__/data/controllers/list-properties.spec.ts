import { noContent, ok, serverError } from '@app/data/helpers'
import { ListPropertiesController } from '@app/data/controllers'

import { throwError } from '@test/mocks/core'
import { FindPropertiesFactorySpy } from '@test/mocks/services'

const sutFactory = () => {
  const findPropertiesFactorySpy = new FindPropertiesFactorySpy()
  const sut = new ListPropertiesController(findPropertiesFactorySpy)

  return {
    sut,
    findPropertiesFactorySpy
  }
}

describe('Find Properties Controller', () => {
  it('should call findMany properties', async () => {
    const { sut, findPropertiesFactorySpy } = sutFactory()

    await sut.handle()

    expect(findPropertiesFactorySpy.callsCount).toBe(1)
  })

  it('should return 500 if findMany properties throws', async () => {
    const { sut, findPropertiesFactorySpy } = sutFactory()
    jest
      .spyOn(findPropertiesFactorySpy, 'findMany')
      .mockImplementationOnce(throwError)
    const response = await sut.handle()

    expect(response).toEqual(serverError(new Error()))
  })

  it('should return 204 if find properties returns no content', async () => {
    const { sut, findPropertiesFactorySpy } = sutFactory()
    findPropertiesFactorySpy.result = []
    const response = await sut.handle()

    expect(response).toEqual(noContent())
  })

  it('should return 200 on success', async () => {
    const { sut, findPropertiesFactorySpy } = sutFactory()
    const response = await sut.handle()

    expect(response).toEqual(ok(findPropertiesFactorySpy.result))
  })
})
