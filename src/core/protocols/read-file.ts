import { PropertyDTO } from '@app/core/entities'

export interface ReadFile {
  read: (buffer: Buffer) => PropertyDTO[]
}
