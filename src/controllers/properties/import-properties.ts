import { Controller } from '@app/protocols/controller'
import { HttpRequest, HttpResponse } from '@app/protocols/http'
import { ReadFile } from '@app/services/protocols/read'

export class ImportPropertiesController implements Controller {
  constructor(private readonly readFile: ReadFile) {}

  handle(request: HttpRequest): HttpResponse {
    this.readFile.read(request.file.content)

    return {
      statusCode: 400,
      body: {
        error: 'Not implemented yet'
      }
    }
  }
}
