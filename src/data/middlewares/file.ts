import { File } from '@app/core/entities'
import { HttpResponse, Middleware } from '@app/data/protocols'
import { ok, serverError } from '@app/data/helpers'

export class FileMiddleware implements Middleware {
  async handle(request: Request): Promise<HttpResponse> {
    try {
      const { file } = request
      const mappedFile: File = {
        name: file.originalname,
        type: file.mimetype,
        content: file.buffer,
        size: file.size,
        extension: `${file.originalname.split('.').pop()}`
      }

      return ok({ file: mappedFile })
    } catch (error) {
      return serverError(error)
    }
  }
}

export interface Request {
  file: Express.Multer.File
}
