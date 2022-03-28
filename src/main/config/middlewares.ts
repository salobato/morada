import { Express } from 'express'
import { bodyParser, contentType, cors } from '@app/main/middlewares'

export const middlewares = (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}