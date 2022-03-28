import { Property } from '@app/core/entities'
import { FindPropertiesByEndDate } from '@app/core/services'
import { Context } from '@app/data/protocols'

interface Params {
  criteria: string
  months: number
}

export class FindPropertiesByEndDateRepository
  implements FindPropertiesByEndDate
{
  constructor(private readonly context: Context) {}
  async findMany(params: Params): Promise<Property[]> {
    const date = new Date()
    date.setMonth(date.getMonth() + params.months)

    const response = await this.context.prisma.property.findMany({
      where: {
        forecast_end: {
          [params.criteria]: date
        }
      }
    })

    return response
  }
}
