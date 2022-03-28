import { Property } from '@app/core/entities'
import { FindProperties } from '@app/core/services'
import { Context } from '@app/data/protocols'

export class FindPropertiesRepository implements FindProperties {
  constructor(private readonly context: Context) {}
  async findMany(): Promise<Property[]> {
    const response = await this.context.prisma.property.findMany()

    return response
  }
}
