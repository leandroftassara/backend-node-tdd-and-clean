import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import { hash } from 'bcrypt'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup success', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Leandro Teste 1',
          email: 'leandro.teste.1@gmail.com',
          password: 'teste1',
          passwordConfirmation: 'teste1'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login success', async () => {
      const password = await hash('teste1', 12)

      await accountCollection.insertOne({
        name: 'Leandro Teste 1',
        email: 'leandro.teste.1@gmail.com',
        password
      })

      await request(app)
        .post('/api/login')
        .send({
          email: 'leandro.teste.1@gmail.com',
          password: 'teste1'
        })
        .expect(200)
    })
  })
})
