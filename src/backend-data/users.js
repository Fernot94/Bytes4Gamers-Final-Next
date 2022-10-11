const { getMongoCollection } = require("./db")

const DATABASE = "challenge13"
const USER_COLLECTION = 'users'

async function getUserByEmail(email) {
    const collection = await getMongoCollection(DATABASE, USER_COLLECTION)
    const result = await collection.findOne({ email })
    return result
}
async function getUserById(userId) {
    const collection = await getMongoCollection(DATABASE, USER_COLLECTION)
    const result = await collection.findOne({ _id: userId })
    return result
}

async function addUser(user) {
    const collection = await getMongoCollection(DATABASE, USER_COLLECTION)
    const result = await collection.insertOne(user)
    return result.insertedId
}



module.exports = {
    getUserByEmail,
    addUser,
    getUserById
}