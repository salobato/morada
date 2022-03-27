import { Property } from '@app/core/Property'
import { Context } from '@app/repositories/protocols/context'
import { CreateProperties } from '@app/services/properties/create-properties'

export class CreatePropertiesRepository implements CreateProperties {
  constructor(private readonly context: Context) {}
  async create(properties: Property[]): Promise<{ count: number }> {
    const response = await this.context.prisma.property.createMany({
      data: properties,
      skipDuplicates: true
    })

    return response
  }
}
