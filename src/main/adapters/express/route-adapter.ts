import { Request, Response } from 'express'

import { Controller } from '@app/data/protocols'
import { HttpResponse } from '@app/data/protocols/http'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.file || {})
    }

    const response: HttpResponse = await controller.handle(request)

    if (response.statusCode >= 200 || response.statusCode <= 299) {
      res.status(response.statusCode).json(response.body)
    } else {
      res.status(response.statusCode).json({
        error: response.body.message
      })
    }
  }
}
