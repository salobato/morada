import { ok, noContent, serverError } from '@app/data/helpers'
import { Controller, HttpResponse } from '@app/data/protocols'
import { FindPropertiesByEndDate } from '@app/core/services'

interface Request {
  params: {
    criteria: string
    months: number
  }
}

export class ListPropertiesByEndDateController implements Controller {
  constructor(
    private readonly findPropertiesByEndDate: FindPropertiesByEndDate
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const response = await this.findPropertiesByEndDate.findMany(
        request.params
      )

      return response.length ? ok(response) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
