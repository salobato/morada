import { HttpResponse, Middleware } from '@app/data/protocols'
import { Request, Response, NextFunction } from 'express'

export const adaptFileMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      headers: req.headers,
      file: req.file,
      files: req.files
    }

    const response: HttpResponse = await middleware.handle(request)
    if (response.statusCode === 200) {
      Object.assign(req.body, response.body)
      next()
    } else {
      res.status(response.statusCode).json({
        error: response.body.message
      })
    }
  }
}
