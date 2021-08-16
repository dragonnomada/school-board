const { pickRandom } = require("../../../../architector/server/util");

const channels = [
    {"name":"Default","target":"Login"}
];

module.exports = {
    channels,
    goError(result) {
        return {
            channel: "Default",
            target: "Error",
            result
        }
    },
    goRandom(result) {
        const channel = pickRandom(channels);
        return {
            ...channel,
            result
        };
    },
    goLoginByDefault(result) {
        return {
            channel: "Default",
            target: "Login",
            result
        }
    }
};