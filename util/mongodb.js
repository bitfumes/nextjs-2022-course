import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const databaseName = "nextjs";

export default async function connect() {
  const client = await MongoClient.connect(uri);
  const db = await client.db(databaseName);

  return db;
}
