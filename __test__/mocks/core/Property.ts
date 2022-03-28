import { Property, PropertyDTO } from '@app/core/entities'

import faker from 'faker'

export const propertyFactory = (options?: Partial<Property>): Property => ({
  id: faker.datatype.uuid(),
  name: faker.random.words(),
  forecast_start: faker.date.recent(),
  forecast_end: faker.date.soon(),
  status: faker.random.word(),
  discount: faker.datatype.boolean(),
  itbi: faker.datatype.boolean(),
  registration: faker.datatype.boolean(),
  complex: faker.random.words(),
  street_type: faker.address.streetPrefix(),
  street: faker.address.streetName(),
  number: faker.address.streetAddress(),
  neighborhood: faker.address.city(),
  zipcode: faker.address.zipCode(),
  city: faker.address.city(),
  bathrooms: faker.datatype.number(3),
  bedrooms: faker.datatype.number(5),
  area: faker.datatype.number(),
  price: faker.datatype.number(),
  created_at: faker.date.recent(),
  ...options
})

export const propertyFactoryDTO = (
  options?: Partial<PropertyDTO>
): PropertyDTO => ({
  name: faker.random.words(),
  forecast_start: faker.date.recent(),
  forecast_end: faker.date.soon(),
  status: faker.random.word(),
  discount: faker.datatype.boolean(),
  itbi: faker.datatype.boolean(),
  registration: faker.datatype.boolean(),
  complex: faker.random.words(),
  street_type: faker.address.streetPrefix(),
  street: faker.address.streetName(),
  number: faker.address.streetAddress(),
  neighborhood: faker.address.city(),
  zipcode: faker.address.zipCode(),
  city: faker.address.city(),
  bathrooms: faker.datatype.number(3),
  bedrooms: faker.datatype.number(5),
  area: faker.datatype.number(),
  price: faker.datatype.number(),
  ...options
})
