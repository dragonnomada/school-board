const { pickRandom } = require("../../../../architector/server/util");

const channels = [
    {"name":"Fromschoolboard","target":"SchoolBoard"},
    {"name":"Fromstudentboard","target":"StudentBoard"}
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
    goSchoolBoardByFromschoolboard(result) {
        return {
            channel: "Fromschoolboard",
            target: "SchoolBoard",
            result
        }
    },
    goStudentBoardByFromstudentboard(result) {
        return {
            channel: "Fromstudentboard",
            target: "StudentBoard",
            result
        }
    }
};