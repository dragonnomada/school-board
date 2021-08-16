import { useEffect, useState } from "react";

import { useRouter } from "next/router";

export function useSession() {
    const router = useRouter();

    const [viewName, setViewName] = useState(null);
    const [actionName, setActionName] = useState(null);
    const [channelName, setChannelName] = useState(null);
    const [targetName, setTargetName] = useState(null);
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(true);
    const [complete, setComplete] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        setLoading(true);
        setComplete(false);
        setError(null);

        if (router.query) {
            if (router.query.session) {
                const data = JSON.parse(
                    Buffer.from(
                        router.query.session.replace(/\./g, "=").replace(/\-/g, "+").replace(/\_/g, "/"),
                        "base64"
                    )
                );

                setViewName(data.view);
                setActionName(data.action);
                setTargetName(data.target);
                setChannelName(data.channel);

                fetch(`/cache/session/${data.result}.json`).then(async response => {
                    const result = await response.json();

                    setResult(result);
                    setComplete(true);
                    setLoading(false);
                    setIsValid(true);
                });
            } else {
                setComplete(true);
                setLoading(false);
                setIsValid(false);
            }
        }
    }, [router.query]);

    return [result, {
        view: viewName,
        action: actionName,
        target: targetName,
        channel: channelName,
        isValid,
        error,
        loading,
        complete
    }];
}

export default useSession;