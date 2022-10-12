const { ObjectId } = require("mongodb");
/* const { generateToken } = require("../services/common")
 */
const { getMongoCollection } = require("./mongodb");

const DATABASE = "mongo-bytes4gamers";
const SESSION_COLLECTION = "sessions";

async function addSession(username) {
  const collection = await getMongoCollection(DATABASE, SESSION_COLLECTION);
  const result = await collection.insertOne({ username });
  return result.insertedId;
}

async function getSessionByToken(token) {
  const collection = await getMongoCollection(DATABASE, SESSION_COLLECTION);
  const result = await collection.findOne({ _id: new ObjectId(token) });
  return result;
}
async function deleteSession(token) {
  const collection = await getMongoCollection(DATABASE, SESSION_COLLECTION);
  const result = await collection.deleteOne({ _id: new ObjectId(token) });
  return result;
}

export { addSession, getSessionByToken };
