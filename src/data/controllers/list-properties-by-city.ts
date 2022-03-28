import { ok, noContent, serverError } from '@app/data/helpers'
import { Controller, HttpResponse } from '@app/data/protocols'
import { FindPropertiesByCity } from '@app/core/services'

interface Request {
  params: {
    city: string
  }
}

export class ListPropertiesByCityController implements Controller {
  constructor(private readonly findPropertiesByCity: FindPropertiesByCity) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const response = await this.findPropertiesByCity.findMany(
        request.params.city
      )

      return response.length ? ok(response) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
