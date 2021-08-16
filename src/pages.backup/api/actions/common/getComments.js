const mongodb = require("mongodb");

module.exports = async () => {
    const client = await mongodb.MongoClient.connect("mongodb+srv://school:board@cluster0.e5oc3.mongodb.net/school-board");

    const db = client.db();

    const commentsCollection = db.collection("comments");

    const comments = await commentsCollection.find().sort({ at: -1 }).toArray();

    await client.close();

    return comments;
};