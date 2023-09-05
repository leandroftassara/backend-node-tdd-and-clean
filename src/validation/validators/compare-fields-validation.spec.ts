import { InvalidParamError } from '../../presentation/errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('anyField', 'anyFieldToCompare')
}

describe('CompareFields Validation', () => {
  test('Should return a InvalidParamError if validation fails', () => {
    const sut = makeSut()

    const error = sut.validate({
      anyField: 'any_value',
      anyFieldToCompare: 'any_value_to_compare'
    })

    expect(error).toEqual(new InvalidParamError('anyFieldToCompare'))
  })

  test('Should return null if validation succeeds', () => {
    const sut = makeSut()

    const error = sut.validate({
      anyField: 'any_value',
      anyFieldToCompare: 'any_value'
    })

    expect(error).toBeFalsy()
  })
})
