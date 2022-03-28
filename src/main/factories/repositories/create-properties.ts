import { CreatePropertiesRepository } from '@app/data/repositories/create-properties'
import { context } from '@app/main/client/prisma'

export const createPropertiesRepository = () => {
  const repository = new CreatePropertiesRepository(context)

  return repository
}
