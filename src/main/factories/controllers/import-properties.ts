import { ImportPropertiesController } from '@app/data/controllers'
import { Controller } from '@app/data/protocols'
import { ReadFileAdapter } from '@app/main/adapters'
import { createPropertiesRepository } from '@app/main/factories/repositories'

export const importPropertiesController = (): Controller => {
  const readFile = new ReadFileAdapter()
  const createProperties = createPropertiesRepository()
  const controller = new ImportPropertiesController(readFile, createProperties)

  return controller
}
