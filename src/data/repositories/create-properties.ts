import { PropertyDTO } from '@app/core/entities'
import { CreateProperties } from '@app/core/services'
import { Context } from '@app/data/protocols'

export class CreatePropertiesRepository implements CreateProperties {
  constructor(private readonly context: Context) {}
  async create(properties: PropertyDTO[]): Promise<{ count: number }> {
    const response = await this.context.prisma.property.createMany({
      data: properties,
      skipDuplicates: true
    })

    return response
  }
}
