import { ListPropertiesByEndDateController } from '@app/data/controllers'
import { Controller } from '@app/data/protocols'
import { findPropertiesByEndDateRepository } from '@app/main/factories/repositories'

export const listPropertiesByEndDateController = (): Controller => {
  const findPropertiesByEndDate = findPropertiesByEndDateRepository()
  const controller = new ListPropertiesByEndDateController(
    findPropertiesByEndDate
  )

  return controller
}
