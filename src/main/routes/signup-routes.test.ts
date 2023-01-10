import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
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
