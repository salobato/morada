import { Context } from '@app/data/protocols'
import { FindPropertiesByCityRepository } from '@app/data/repositories'
import { createMockContext } from '@test/mocks/context'
import { propertyFactory } from '@test/mocks/core/Property'

const sutFactory = () => {
  const mockContext = createMockContext()
  const context = mockContext as unknown as Context
  const sut = new FindPropertiesByCityRepository(context)

  return {
    sut,
    mockContext
  }
}

describe('Find Properties By City Repository', () => {
  it('should return a list of properties on success', async () => {
    const { sut, mockContext } = sutFactory()
    const city = propertyFactory().city
    const properties = [
      propertyFactory({ city }),
      propertyFactory({ city }),
      propertyFactory({ city })
    ]

    mockContext.prisma.property.findMany.mockResolvedValue(properties)

    await expect(sut.findMany(city)).resolves.toEqual(properties)
  })
})
