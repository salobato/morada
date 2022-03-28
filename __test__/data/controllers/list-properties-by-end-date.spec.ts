import { noContent, ok, serverError } from '@app/data/helpers'
import { ListPropertiesByEndDateController } from '@app/data/controllers'

import { throwError } from '@test/mocks/core'
import { FindPropertiesByEndDateFactorySpy } from '@test/mocks/services'

interface Request {
  params: {
    criteria: string
    months: number
  }
}

const sutFactory = () => {
  const findPropertiesByEndDateFactorySpy =
    new FindPropertiesByEndDateFactorySpy()
  const sut = new ListPropertiesByEndDateController(
    findPropertiesByEndDateFactorySpy
  )

  return {
    sut,
    findPropertiesByEndDateFactorySpy
  }
}

const requestFactory = (params = { criteria: 'lt', months: 12 }): Request => {
  return {
    params
  }
}

describe('Find Properties By City Controller', () => {
  it('should call findMany properties with correct params', async () => {
    const { sut, findPropertiesByEndDateFactorySpy } = sutFactory()
    const params = { criteria: 'gt', months: 36 }
    const request = requestFactory(params)

    await sut.handle(request)

    expect(findPropertiesByEndDateFactorySpy.callsCount).toBe(1)
    expect(findPropertiesByEndDateFactorySpy.params).toEqual(params)
  })

  it('should return 500 if findMany properties throws', async () => {
    const { sut, findPropertiesByEndDateFactorySpy } = sutFactory()
    const request = requestFactory()
    jest
      .spyOn(findPropertiesByEndDateFactorySpy, 'findMany')
      .mockImplementationOnce(throwError)

    const response = await sut.handle(request)

    expect(response).toEqual(serverError(new Error()))
  })

  it('should return 204 if find properties returns no content', async () => {
    const { sut, findPropertiesByEndDateFactorySpy } = sutFactory()
    const request = requestFactory()
    findPropertiesByEndDateFactorySpy.result = []
    const response = await sut.handle(request)

    expect(response).toEqual(noContent())
  })

  it('should return 200 on success', async () => {
    const { sut, findPropertiesByEndDateFactorySpy } = sutFactory()
    const request = requestFactory()
    const response = await sut.handle(request)

    expect(response).toEqual(ok(findPropertiesByEndDateFactorySpy.result))
  })
})
