import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AccountModel } from '../../../../domain/models/account'

export interface AddAccountRepository {
  create: (accountData: AddAccountModel) => Promise<AccountModel>
}
