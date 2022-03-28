import { Context } from '@app/data/protocols'
import { FindPropertiesRepository } from '@app/data/repositories'
import { createMockContext } from '@test/mocks/context'
import { propertyFactory } from '@test/mocks/core/Property'

const sutFactory = () => {
  const mockContext = createMockContext()
  const context = mockContext as unknown as Context
  const sut = new FindPropertiesRepository(context)

  return {
    sut,
    mockContext
  }
}

describe('Find Properties Repository', () => {
  it('should return a list of properties on success', async () => {
    const { sut, mockContext } = sutFactory()
    const properties = [propertyFactory(), propertyFactory(), propertyFactory()]

    mockContext.prisma.property.findMany.mockResolvedValue(properties)

    await expect(sut.findMany()).resolves.toEqual(properties)
  })
})
