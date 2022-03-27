export interface Property {
  id: string
  name: string
  forecast_start: Date
  forecast_end: Date
  status: string
  discount: boolean
  itbi: boolean
  registration: boolean
  complex: string
  street_type: string
  street: string
  number: string
  neighborhood: string
  zipcode: string
  city: string
  bathrooms: number
  bedrooms: number
  area: number
  price: number
  created_at: Date
}
