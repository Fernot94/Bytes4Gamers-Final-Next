const { MongoClient, ObjectId } = require("mongodb");
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017";
let client;

const DATABASE = "challenge13";
const USER_COLLECTION = "users";
const SESSION_COLLECTION = "sessions";

async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(URL);
    }
    return client;
  } catch (err) {
    console.log(err);
  }
}

async function getMongoCollection(dbName, collectionName) {
  const client = await connectToMongo();
  return client.db(dbName).collection(collectionName);
}

async function dropCollections() {
  const client = await connectToMongo();
  await client.db(DATABASE).collection(USER_COLLECTION).drop();
  await client.db(DATABASE).collection(SESSION_COLLECTION).drop();
  client.close();
}

module.exports = {
  dropCollections,
  getMongoCollection,
};
