import {
  HttpRequest,
  HttpResponse,
  Controller,
  AddAccount,
  Validation
} from './signup-controller-protocols'
import {
  badRequest,
  serverError,
  successRequest
} from '../../helpers/http/http-helper'

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation
  ) {
    this.addAccount = addAccount
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)

      if (error) return badRequest(error)

      const { name, email, password } = httpRequest.body

      const account = await this.addAccount.execute({ name, email, password })

      return successRequest(account)
    } catch (error) {
      return serverError(error)
    }
  }
}
