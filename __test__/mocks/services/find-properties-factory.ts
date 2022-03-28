import { Property } from '@app/core/entities'
import { FindProperties } from '@app/core/services'
import { propertyFactory } from '@test/mocks/core'

export class FindPropertiesFactorySpy implements FindProperties {
  callsCount = 0
  result = [propertyFactory(), propertyFactory(), propertyFactory()]

  findMany(): Promise<Property[]> {
    this.callsCount++

    return Promise.resolve(this.result)
  }
}
