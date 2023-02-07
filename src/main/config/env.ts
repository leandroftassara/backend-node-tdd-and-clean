export default {
  mongoUrl:
    (process.env.MONGO_URL as string) ??
    'mongodb://localhost:27017/clean-node-api',
  port: process.env.PORT ?? 5050,
  jwtSecret: process.env.JWT_SECRET ?? 'tjn@#d0b2d_3x.1/i38'
}
