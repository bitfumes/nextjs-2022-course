import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const databaseName = process.env.MONGO_DB_NAME;

let dbCache = null;

export default async function connect() {
  if (dbCache) {
    return dbCache;
  }

  const client = await MongoClient.connect(uri);
  const db = await client.db(databaseName);

  dbCache = db;
  return db;
}
