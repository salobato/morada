import { Property } from '@app/core/entities'
import { FindPropertiesByCity } from '@app/core/services'
import { Context } from '@app/data/protocols'

export class FindPropertiesByCityRepository implements FindPropertiesByCity {
  constructor(private readonly context: Context) {}
  async findMany(city: string): Promise<Property[]> {
    const response = await this.context.prisma.property.findMany({
      where: {
        city
      }
    })

    return response
  }
}
