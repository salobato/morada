import { Router } from 'express'
import multer from 'multer'
import { fileMiddleware } from '@app/main/middlewares'
import { adaptRoute } from '@app/main/adapters/express'
import {
  importPropertiesController,
  listPropertiesController,
  listPropertiesByCityController,
  listPropertiesByEndDateController
} from '@app/main/factories/controllers'

const upload = multer()

const middlewares = [upload.single('file'), fileMiddleware]

export const routes = (router: Router): void => {
  router.post(
    '/properties',
    middlewares,
    adaptRoute(importPropertiesController())
  )
  router.get('/properties', adaptRoute(listPropertiesController()))
  router.get(
    '/propertiesByCity/:city',
    adaptRoute(listPropertiesByCityController())
  )
  router.get(
    '/propertiesByEndDate/:criteria/:months',
    adaptRoute(listPropertiesByEndDateController())
  )
}
