import { PropertyDTO } from '@app/core/Property'

export interface CreateProperties {
  create: (properties: PropertyDTO[]) => Promise<{ count: number }>
}
