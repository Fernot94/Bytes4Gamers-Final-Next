import { ObjectId } from "mongodb";
import { getMongoCollection } from "../../pages/api/data/db";

const DB_NAME = "mongo-bytes4gamers";
const COLLECTION_NAME = "bytes4gamers";

async function insertUser(user) {
  const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
  await collection.insertUser(user);
}

export { insertUser };
