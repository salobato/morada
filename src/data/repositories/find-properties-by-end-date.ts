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
    const now = new Date()
    const monthsFromNow = now.setMonth(params.months)

    const response = await this.context.prisma.property.findMany({
      where: {
        forecast_end: {
          [params.criteria]: monthsFromNow
        }
      }
    })

    return response
  }
}
