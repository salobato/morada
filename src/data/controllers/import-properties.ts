import { File } from '@app/core/entities'
import { ok, serverError } from '@app/data/helpers'
import { Controller, HttpResponse } from '@app/data/protocols'
import { CreateProperties } from '@app/core/services'
import { ReadFile } from '@app/core/protocols'

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
