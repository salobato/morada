import { Context } from '@app/data/protocols'
import { FindPropertiesByEndDateRepository } from '@app/data/repositories'
import { createMockContext } from '@test/mocks/context'
import { propertyFactory } from '@test/mocks/core/Property'

const sutFactory = () => {
  const mockContext = createMockContext()
  const context = mockContext as unknown as Context
  const sut = new FindPropertiesByEndDateRepository(context)

  return {
    sut,
    mockContext
  }
}

describe('Find Properties By End Date Repository', () => {
  it('should return a list of properties on success', async () => {
    const { sut, mockContext } = sutFactory()
    const months = propertyFactory().forecast_end
    const properties = [
      propertyFactory({ forecast_end: months }),
      propertyFactory({ forecast_end: months }),
      propertyFactory({ forecast_end: months })
    ]

    mockContext.prisma.property.findMany.mockResolvedValue(properties)

    await expect(sut.findMany({ criteria: 'lt', months: 12 })).resolves.toEqual(
      properties
    )
  })
})
