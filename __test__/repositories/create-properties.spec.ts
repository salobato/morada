import { CreatePropertiesRepository } from '@app/repositories/create-properties'
import { Context } from '@app/repositories/protocols/context'
import { createMockContext } from '@test/mocks/context'
import { propertyFactory } from '@test/mocks/core/Property'

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
    const properties = [propertyFactory(), propertyFactory(), propertyFactory()]

    mockContext.prisma.property.createMany.mockResolvedValue({ count: 3 })

    await expect(sut.create(properties)).resolves.toEqual({
      count: 3
    })
  })
})
