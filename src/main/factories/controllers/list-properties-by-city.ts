import { ListPropertiesByCityController } from '@app/data/controllers'
import { Controller } from '@app/data/protocols'
import { findPropertiesByCityRepository } from '@app/main/factories/repositories'

export const listPropertiesByCityController = (): Controller => {
  const findPropertiesByCity = findPropertiesByCityRepository()
  const controller = new ListPropertiesByCityController(findPropertiesByCity)

  return controller
}
