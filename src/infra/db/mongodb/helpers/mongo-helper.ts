import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect (uri: string): Promise<void> {
    // this.client = await MongoClient.connect(global.__MONGO_URI__);
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect(this.uri)
    }

    return this.client.db().collection(name)
  },

  map (data: any): any {
    const { _id, ...dataWithoutId } = data
    return Object.assign({}, dataWithoutId, { id: _id.toString() })
  }
}
