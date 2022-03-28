import { Property } from '@app/core/entities'

export interface FindPropertiesByCity {
  findMany: (city: string) => Promise<Property[]>
}
