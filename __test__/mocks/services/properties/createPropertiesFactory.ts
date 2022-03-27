import { PropertyDTO } from '@app/core/Property'
import { CreateProperties } from '@app/services/properties/create-properties'

export class CreatePropertiesFactorySpy implements CreateProperties {
  result: number
  params: PropertyDTO[]
  create(properties: PropertyDTO[]): Promise<{ count: number }> {
    this.params = properties
    this.result = properties.length

    return Promise.resolve({ count: this.result })
  }
}
