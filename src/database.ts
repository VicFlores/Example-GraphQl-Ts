import { MongoClient } from 'mongodb';

const url: string =
  'mongodb+srv://VicFlores11:vicsito11@proyectos.s2wwa.mongodb.net/graphql-ts?retryWrites=true&w=majority';

const client = new MongoClient(url);
const dbName: string = 'graphql-ts';

module.exports = async () => {
  await client.connect();
  return client.db(dbName);
};
