import { PropertyDTO } from '@app/core/Property'

export interface ReadFile {
  read: (buffer: Buffer) => PropertyDTO[]
}
