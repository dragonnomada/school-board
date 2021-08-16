const mongodb = require("mongodb");

module.exports = async (username) => {
    const client = await mongodb.MongoClient.connect("mongodb+srv://school:board@cluster0.e5oc3.mongodb.net/school-board");

    const db = client.db();

    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ username });

    await client.close();

    return user;
};