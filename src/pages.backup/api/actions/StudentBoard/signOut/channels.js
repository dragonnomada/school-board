const { pickRandom } = require("../../../../architector/server/util");

const channels = [
    {"name":"Default2","target":"Login"}
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
    goLoginByDefault2(result) {
        return {
            channel: "Default2",
            target: "Login",
            result
        }
    }
};