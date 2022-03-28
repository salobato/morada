import { FindPropertiesByCityRepository } from '@app/data/repositories'
import { context } from '@app/main/client/prisma'

export const findPropertiesByCityRepository = () => {
  const repository = new FindPropertiesByCityRepository(context)

  return repository
}
