import { FindPropertiesByEndDateRepository } from '@app/data/repositories'
import { context } from '@app/main/client/prisma'

export const findPropertiesByEndDateRepository = () => {
  const repository = new FindPropertiesByEndDateRepository(context)

  return repository
}
