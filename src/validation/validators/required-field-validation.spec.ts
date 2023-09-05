import { MissingParamError } from '../../presentation/errors'
import { RequiredFieldValidation } from './required-field-validation'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('anyField')
}

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = makeSut()

    const error = sut.validate({})

    expect(error).toEqual(new MissingParamError('anyField'))
  })

  test('Should return null if validation succeeds', () => {
    const sut = makeSut()

    const error = sut.validate({ anyField: 'any_value' })

    expect(error).toBeFalsy()
  })
})
