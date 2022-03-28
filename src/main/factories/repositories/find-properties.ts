import { FindPropertiesRepository } from '@app/data/repositories'
import { context } from '@app/main/client/prisma'

export const findPropertiesRepository = () => {
  const repository = new FindPropertiesRepository(context)

  return repository
}
