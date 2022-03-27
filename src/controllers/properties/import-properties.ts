import { Controller } from '@app/controllers/protocols/controller'
import { HttpRequest, HttpResponse } from '@app/controllers/protocols/http'
import { CreateProperties } from '@app/services/properties/create-properties'
import { ReadFile } from '@app/services/protocols/read'
import { ok, serverError } from '../helpers/http-response'

export class ImportPropertiesController implements Controller {
  constructor(
    private readonly readFile: ReadFile,
    private readonly createProperties: CreateProperties
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const properties = this.readFile.read(request.file.content)

      const response = await this.createProperties.create(properties)

      return ok(response)
    } catch (error) {
      return serverError(error)
    }
  }
}
