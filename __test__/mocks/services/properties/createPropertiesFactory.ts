import { Property } from '@app/core/Property'
import { CreateProperties } from '@app/services/properties/create-properties'

export class CreatePropertiesFactorySpy implements CreateProperties {
  result: number
  params: Property[]
  create(properties: Property[]): Promise<{ count: number }> {
    this.params = properties
    this.result = properties.length

    return Promise.resolve({ count: this.result })
  }
}
