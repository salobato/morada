import { FileMiddleware } from '@app/data/middlewares'
import { adaptFileMiddleware } from '@app/main/adapters/express'

export const fileMiddleware = adaptFileMiddleware(new FileMiddleware())
