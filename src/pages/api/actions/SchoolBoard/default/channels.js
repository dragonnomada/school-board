const { pickRandom } = require("../../../../architector/server/util");

const channels = [
    {"name":"Default4","target":"StudentBoard"}
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
    goStudentBoardByDefault4(result) {
        return {
            channel: "Default4",
            target: "StudentBoard",
            result
        }
    }
};