enum StatusCode {
  'ok' = 200,
  'noContent' = 204,
  'badRequest' = 400,
  'serverError' = 500
}

export interface HttpResponse<T = any> {
  body: T
  statusCode: StatusCode
}
