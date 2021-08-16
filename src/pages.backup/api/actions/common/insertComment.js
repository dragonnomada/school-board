const mongodb = require("mongodb");

module.exports = async ({ username, comment }) => {
    const client = await mongodb.MongoClient.connect("mongodb+srv://school:board@cluster0.e5oc3.mongodb.net/school-board");

    const db = client.db();

    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ username });

    if (user) {
        const commentsCollection = db.collection("comments");
    
        await commentsCollection.insertOne({
            username,
            comment,
            pictureId: user.pictureId,
            at: new Date().toISOString()
        });
    }

    await client.close();
};