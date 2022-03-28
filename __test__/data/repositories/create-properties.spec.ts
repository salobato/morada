import { CreatePropertiesRepository } from '@app/data/repositories/create-properties'
import { Context } from '@app/data/protocols'
import { createMockContext } from '@test/mocks/context'
import { propertyFactoryDTO } from '@test/mocks/core/Property'

const sutFactory = () => {
  const mockContext = createMockContext()
  const context = mockContext as unknown as Context
  const sut = new CreatePropertiesRepository(context)

  return {
    sut,
    mockContext
  }
}

describe('Create Properties Repository', () => {
  it('should return a count of added properties on success', async () => {
    const { sut, mockContext } = sutFactory()
    const properties = [
      propertyFactoryDTO(),
      propertyFactoryDTO(),
      propertyFactoryDTO()
    ]

    mockContext.prisma.property.createMany.mockResolvedValue({ count: 3 })

    await expect(sut.create(properties)).resolves.toEqual({
      count: 3
    })
  })
})
