import { Router } from 'express'
import multer from 'multer'
import { fileMiddleware } from '@app/main/middlewares'
import { adaptRoute } from '@app/main/adapters/express'
import { importPropertiesController } from '@app/main/factories/controllers/import-properties'

const upload = multer()

const middlewares = [upload.single('file'), fileMiddleware]

export const routes = (router: Router): void => {
  router.post(
    '/properties',
    middlewares,
    adaptRoute(importPropertiesController())
  )
}
