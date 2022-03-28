import { CreatePropertiesRepository } from '@app/data/repositories'
import { context } from '@app/main/client/prisma'

export const createPropertiesRepository = () => {
  const repository = new CreatePropertiesRepository(context)

  return repository
}
