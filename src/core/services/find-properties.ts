import { Property } from '@app/core/entities'

export interface FindProperties {
  findMany: () => Promise<Property[]>
}
