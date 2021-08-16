const { pickRandom } = require("../../../../architector/server/util");

const channels = [
    {"name":"Fromstudent","target":"StudentBoard"},
    {"name":"Withnewcomment","target":"StudentBoard"},
    {"name":"Fail","target":"Login"}
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
    goStudentBoardByFromstudent(result) {
        return {
            channel: "Fromstudent",
            target: "StudentBoard",
            result
        }
    },
    goStudentBoardByWithnewcomment(result) {
        return {
            channel: "Withnewcomment",
            target: "StudentBoard",
            result
        }
    },
    goLoginByFail(result) {
        return {
            channel: "Fail",
            target: "Login",
            result
        }
    }
};