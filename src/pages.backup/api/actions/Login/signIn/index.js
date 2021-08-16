// Import third party modules
// Example: const mongodb = require("mongodb");
const mongodb = require("mongodb");

/**
 * This is the controller for the action
 * You can handle the input and response with some output
 * The possible response channels are listed in channels.js
 */
const { createActionController } = require("./controller");

/**
 * These are the channels
 * You can get more channels not listed (if you modified the diagram)
 * Return goError() if you want to show some error
 * Return goRandom() if you want to return a random channel and view
 * Return go<View>By<Channel>() if you want to go to the <View> by the <Channel>
 */
const { 
    goError, 
    goRandom,
    goStudentBoardByFromstudent,
    goStudentBoardByWithnewcomment,
    goLoginByFail
} = require("./channels");
const getComments = require("../../common/getComments");

/**
 * This is the main export from api
 * You can modify the logic, driving to the correct view and channel
 * Try to custom the logic from your project
 * 
 * For example, if you want to go Login's View with the Success channel
 * call goLoginBySuccess(result), where "result" is some custom data
 * i.e goLoginBySuccess({ token: 123, message: "Welcome to the system" })
 * 
 * Return the custom channel depends on logic.
 * 
 * You can import NodeJS third party modules to use Databases or something.
 */
module.exports = createActionController(async input => {
    const client = await mongodb.MongoClient.connect("mongodb+srv://school:board@cluster0.e5oc3.mongodb.net/school-board");

    const db = client.db();

    const users = db.collection("users");
    
    const { username, password, comment } = input;

    const user = await users.findOne({ username, password });

    if (user) {
        user.id = user._id;

        if (comment) {
            return goStudentBoardByWithnewcomment({
                username,
                comment,
                comments: await getComments(),
                user
            });
        }

        return goStudentBoardByFromstudent({
            username,
            comments: await getComments(),
            user
        });
    }

    return goLoginByFail({
        error: `Invalid user or password (${username})`,
        username,
        comment
    });
});