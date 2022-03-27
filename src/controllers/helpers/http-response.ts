import { HttpResponse } from '@app/controllers/protocols/http'

export class ServerError extends Error {
  constructor(stack: string) {
    super('Internal server error, please try again later')
    this.name = 'ServerError'
    this.stack = stack
  }
}

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})
