import { PropertyDTO } from '@app/core/entities'

export interface CreateProperties {
  create: (properties: PropertyDTO[]) => Promise<{ count: number }>
}
