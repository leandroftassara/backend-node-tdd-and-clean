import { InvalidParamError } from '../../presentation/errors'
import { EmailValidator } from '../protocols/email-validator'
import { Validation } from '../../presentation/protocols'

export class EmailValidation implements Validation {
  constructor (private readonly fieldName: string, private readonly emailValidator: EmailValidator) {
    this.fieldName = fieldName
    this.emailValidator = emailValidator
  }

  validate (input: any): Error | null {
    if (!this.emailValidator.isValid(input[this.fieldName])) {
      return new InvalidParamError(this.fieldName)
    }

    return null
  }
}
