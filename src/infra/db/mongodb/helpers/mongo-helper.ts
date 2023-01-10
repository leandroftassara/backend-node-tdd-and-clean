import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect (uri: string): Promise<void> {
    // this.client = await MongoClient.connect(global.__MONGO_URI__);
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (data: any, mongoResult: any): any {
    return Object.assign({}, data, { id: mongoResult.insertedId.toString() })
  }
}
