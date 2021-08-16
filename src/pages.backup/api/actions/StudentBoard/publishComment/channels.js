const { pickRandom } = require("../../../../architector/server/util");

const channels = [
    {"name":"Default","target":"StudentBoard"}
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
    goStudentBoardByDefault(result) {
        return {
            channel: "Default",
            target: "StudentBoard",
            result
        }
    }
};