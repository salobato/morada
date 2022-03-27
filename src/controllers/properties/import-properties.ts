import { File } from '@app/core/File'
import { ok, serverError } from '@app/controllers/helpers/http-response'
import { Controller } from '@app/controllers/protocols/controller'
import { HttpResponse } from '@app/controllers/protocols/http'
import { CreateProperties } from '@app/services/properties/create-properties'
import { ReadFile } from '@app/services/protocols/read'

export interface Request {
  file: File
}
export class ImportPropertiesController implements Controller {
  constructor(
    private readonly readFile: ReadFile,
    private readonly createProperties: CreateProperties
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const properties = this.readFile.read(request.file.content)

      const response = await this.createProperties.create(properties)

      return ok(response)
    } catch (error) {
      return serverError(error)
    }
  }
}
