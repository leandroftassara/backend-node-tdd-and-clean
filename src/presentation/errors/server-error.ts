export class ServerError extends Error {
  constructor (stack: string) {
    super('Invalid server error')
    this.name = 'ServerError'
    this.stack = stack
  }
}
