import { ServerError, UnauthorizedError } from '../../errors'
import { HttpResponse } from '../../protocols'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack as string)
})

export const successRequest = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
