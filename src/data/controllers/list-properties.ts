import { ok, noContent, serverError } from '@app/data/helpers'
import { Controller, HttpResponse } from '@app/data/protocols'
import { FindProperties } from '@app/core/services'

export class ListPropertiesController implements Controller {
  constructor(private readonly findProperties: FindProperties) {}

  async handle(): Promise<HttpResponse> {
    try {
      const response = await this.findProperties.findMany()

      return response.length ? ok(response) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
