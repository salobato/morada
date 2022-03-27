import { PropertyDTO } from '@app/core/Property'
import { ReadFile } from '@app/services/protocols/read'

import { propertyFactoryDTO } from '@test/mocks/core/Property'

export class ReadFactorySpy implements ReadFile {
  result = [propertyFactoryDTO(), propertyFactoryDTO()]
  params: Buffer
  read(buffer: Buffer): PropertyDTO[] {
    this.params = buffer

    return this.result
  }
}
