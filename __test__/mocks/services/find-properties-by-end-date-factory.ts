import { Property } from '@app/core/entities'
import { FindPropertiesByEndDate } from '@app/core/services'
import { propertyFactory } from '@test/mocks/core'

export class FindPropertiesByEndDateFactorySpy
  implements FindPropertiesByEndDate
{
  callsCount = 0
  result = [propertyFactory(), propertyFactory(), propertyFactory()]
  params: { criteria: string; months: number }

  findMany(params): Promise<Property[]> {
    this.callsCount++
    this.params = params

    return Promise.resolve(this.result)
  }
}
