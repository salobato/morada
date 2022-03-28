import express from 'express'
import { middlewares } from './middlewares'
import { routes } from './routes'

export const app = express()
middlewares(app)
routes(app)
