import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('anyField')

    const error = sut.validate({})

    expect(error).toEqual(new MissingParamError('anyField'))
  })

  test('Should return null if validation succeeds', () => {
    const sut = new RequiredFieldValidation('anyField')

    const error = sut.validate({ anyField: 'any_value' })

    expect(error).toBeFalsy()
  })
})
