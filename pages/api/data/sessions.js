const { ObjectId } = require("mongodb");
const { generateToken } = require("../services/common");
const { getMongoCollection } = require("./db");

const DATABASE = "challenge13";
const SESSION_COLLECTION = "sessions";

async function addSession(userId) {
  const collection = await getMongoCollection(DATABASE, SESSION_COLLECTION);
  const result = await collection.insertOne({ userId });
  return result.insertedId;
}

async function getSessionByToken(token) {
  const collection = await getMongoCollection(DATABASE, SESSION_COLLECTION);
  const result = await collection.findOne({ _id: new ObjectId(token) });
  return result;
}

module.exports = {
  addSession,
  getSessionByToken,
};
