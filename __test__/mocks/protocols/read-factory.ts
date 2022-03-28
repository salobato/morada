import { PropertyDTO } from '@app/core/entities'
import { ReadFile } from '@app/core/protocols'

import { propertyFactoryDTO } from '@test/mocks/core/Property'

export class ReadFactorySpy implements ReadFile {
  result = [propertyFactoryDTO(), propertyFactoryDTO()]
  params: Buffer
  read(buffer: Buffer): PropertyDTO[] {
    this.params = buffer

    return this.result
  }
}
