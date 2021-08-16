import { createContext, useContext } from "react";

import { useRouter } from "next/router";

export const CommonContext = createContext({
    action: "unknown",
    isLock: false,
    lock(action) { throw new Error("Upgrade to Architector Pro >= v1.0.7") },
    unlock() { throw new Error("Upgrade to Architector Pro >= v1.0.7") },
});

export function useCommonAction(name) {
    const { lock, unlock } = useContext(CommonContext);

    const router = useRouter();

    return async data => {
        // alert(`Name: ${name} | Data: ${JSON.stringify(data)}`);
        lock(name);

        const response = await fetch(`/api/actions/${name}`, {
            method: "post",
            headers: { "Content-Type": "application/JSON" },
            body: JSON.stringify(data)
        });

        unlock();

        if (!response.ok) {
            const error = await response.text();

            router.push({
                pathname: "/error",
                query: {
                    message: `Error in action ${name}`,
                    error
                }
            });
            return;
        }

        const { channel, target, result } = await response.json();

        // alert(`Target: ${target} | Result: ${JSON.stringify(result)}`);

        router.push({
            pathname: `/views/${target}`,
            query: {
                session: Buffer.from(JSON.stringify({
                    view: name.split("/")[0],
                    action: name.split("/")[1],
                    channel,
                    target,
                    result
                })).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, ".")
            }
        });
    }
}