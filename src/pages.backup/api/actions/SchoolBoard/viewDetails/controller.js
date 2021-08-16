const fs = require("fs");
const { promisify } = require("util");

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

function createActionController(handler) {
    return async (request, response) => {
        const input = request.body;
        
        console.log("Input:", input);

        const { name, target, result } = await handler(input);
    
        await mkdir("public/cache/session", { recursive: true });

        const sessionId = [...Array(4)].map(() => Math.random().toString(32).slice(2)).join("");

        await writeFile(`public/cache/session/${sessionId}.json`, JSON.stringify(result || null, null, 2), "utf-8");

        response.send({
            channel: name,
            target: target,
            result: sessionId
        });
    };
}

module.exports = {
    createActionController
};