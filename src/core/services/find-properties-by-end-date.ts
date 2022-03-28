import { Property } from '@app/core/entities'

export interface FindPropertiesByEndDate {
  findMany: ({ criteria: string, months: number }) => Promise<Property[]>
}
