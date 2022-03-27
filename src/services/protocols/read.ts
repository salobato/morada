import { Property } from '@app/core/Property'

export interface ReadFile {
  read: (buffer: Buffer) => Property[]
}
