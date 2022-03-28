import { ImportPropertiesController } from '@app/data/controllers'
import { Controller } from '@app/data/protocols'
import { ReadFileAdapter } from '@app/main/adapters/read-file'
import { createPropertiesRepository } from '@app/main/factories/repositories/create-properties'

export const importPropertiesController = (): Controller => {
  const readFile = new ReadFileAdapter()
  const createProperties = createPropertiesRepository()
  const controller = new ImportPropertiesController(readFile, createProperties)

  return controller
}
