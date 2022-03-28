import { ListPropertiesController } from '@app/data/controllers'
import { Controller } from '@app/data/protocols'
import { findPropertiesRepository } from '@app/main/factories/repositories'

export const listPropertiesController = (): Controller => {
  const findProperties = findPropertiesRepository()
  const controller = new ListPropertiesController(findProperties)

  return controller
}
