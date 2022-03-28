import { Property } from '@app/core/entities'
import { FindPropertiesByCity } from '@app/core/services'
import { propertyFactory } from '@test/mocks/core'

export class FindPropertiesByCityFactorySpy implements FindPropertiesByCity {
  callsCount = 0
  result = [propertyFactory(), propertyFactory(), propertyFactory()]
  params: string

  findMany(city: string): Promise<Property[]> {
    this.callsCount++
    this.params = city

    return Promise.resolve(this.result)
  }
}
