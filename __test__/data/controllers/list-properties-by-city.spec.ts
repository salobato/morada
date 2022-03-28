import { noContent, ok, serverError } from '@app/data/helpers'
import { ListPropertiesByCityController } from '@app/data/controllers'

import { propertyFactory, throwError } from '@test/mocks/core'
import { FindPropertiesByCityFactorySpy } from '@test/mocks/services'

interface Request {
  params: {
    city: string
  }
}

const sutFactory = () => {
  const findPropertiesByCityFactorySpy = new FindPropertiesByCityFactorySpy()
  const sut = new ListPropertiesByCityController(findPropertiesByCityFactorySpy)

  return {
    sut,
    findPropertiesByCityFactorySpy
  }
}

const requestFactory = (city = propertyFactory().city): Request => {
  return {
    params: {
      city
    }
  }
}

describe('Find Properties By City Controller', () => {
  it('should call findMany properties with correct city', async () => {
    const { sut, findPropertiesByCityFactorySpy } = sutFactory()
    const property = propertyFactory()
    const request = requestFactory(property.city)

    await sut.handle(request)

    expect(findPropertiesByCityFactorySpy.callsCount).toBe(1)
    expect(findPropertiesByCityFactorySpy.params).toEqual(property.city)
  })

  it('should return 500 if findMany properties throws', async () => {
    const { sut, findPropertiesByCityFactorySpy } = sutFactory()
    const request = requestFactory()
    jest
      .spyOn(findPropertiesByCityFactorySpy, 'findMany')
      .mockImplementationOnce(throwError)

    const response = await sut.handle(request)

    expect(response).toEqual(serverError(new Error()))
  })

  it('should return 204 if find properties returns no content', async () => {
    const { sut, findPropertiesByCityFactorySpy } = sutFactory()
    const request = requestFactory()
    findPropertiesByCityFactorySpy.result = []
    const response = await sut.handle(request)

    expect(response).toEqual(noContent())
  })

  it('should return 200 on success', async () => {
    const { sut, findPropertiesByCityFactorySpy } = sutFactory()
    const request = requestFactory()
    const response = await sut.handle(request)

    expect(response).toEqual(ok(findPropertiesByCityFactorySpy.result))
  })
})
