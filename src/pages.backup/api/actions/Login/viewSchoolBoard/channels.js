const { pickRandom } = require("../../../../architector/server/util");

const channels = [
    {"name":"Withoutsession","target":"SchoolBoard"}
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
    goSchoolBoardByWithoutsession(result) {
        return {
            channel: "Withoutsession",
            target: "SchoolBoard",
            result
        }
    }
};