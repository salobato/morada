import { ImportPropertiesController } from '@app/controllers/properties/import-properties'
import { Controller } from '@app/controllers/protocols/controller'
import { ReadFileAdapter } from '@app/main/adapters/readFile'
import { createPropertiesRepository } from '@app/main/factories/repositories/create-properties'

export const importPropertiesController = (): Controller => {
  const readFile = new ReadFileAdapter()
  const createProperties = createPropertiesRepository()
  const controller = new ImportPropertiesController(readFile, createProperties)

  return controller
}
