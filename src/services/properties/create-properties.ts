import { Property } from '@app/core/Property'

export interface CreateProperties {
  create: (properties: Property[]) => Promise<{ count: number }>
}
