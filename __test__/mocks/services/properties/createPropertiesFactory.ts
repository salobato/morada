import { Property } from '@app/core/Property'
import { CreateProperties } from '@app/services/properties/create-properties'

import { propertyFactory } from '@test/mocks/core/Property'

export class CreatePropertiesFactorySpy implements CreateProperties {
  result = [propertyFactory(), propertyFactory()]
  params: Property[]
  create(properties: Property[]): Promise<Property[]> {
    this.params = properties

    return Promise.resolve(this.result)
  }
}
