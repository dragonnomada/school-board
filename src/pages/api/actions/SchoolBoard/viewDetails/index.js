// Import third party modules
// Example: const mongodb = require("mongodb");

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
    goDetailsByDefault
} = require("./channels");

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
module.exports = createActionController(input => {
    const { username, comment } = input;

    return goDetailsByDefault({
        username,
        comment
    });
});