const { pickRandom } = require("../../../../architector/server/util");

const channels = [
    {"name":"Default","target":"Details"}
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
    goDetailsByDefault(result) {
        return {
            channel: "Default",
            target: "Details",
            result
        }
    }
};