import { Property } from '@app/core/Property'
import { ReadFile } from '@app/services/protocols/read'

import { propertyFactory } from '@test/mocks/core/Property'

export class ReadFactorySpy implements ReadFile {
  result = [propertyFactory(), propertyFactory()]
  params: Buffer
  read(buffer: Buffer): Property[] {
    this.params = buffer
    return this.result
  }
}
