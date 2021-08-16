const { pickRandom } = require("../../../../architector/server/util");

const channels = [
    {"name":"Withsession","target":"StudentBoard"},
    {"name":"Withoutsession","target":"Login"}
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
    goStudentBoardByWithsession(result) {
        return {
            channel: "Withsession",
            target: "StudentBoard",
            result
        }
    },
    goLoginByWithoutsession(result) {
        return {
            channel: "Withoutsession",
            target: "Login",
            result
        }
    }
};