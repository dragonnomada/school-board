import { useRouter } from "next/router";

export const info = {
    "projectFolder": "C:\\Users\\lanz\\Desktop\\Student Board",
    "path": "C:\\Users\\lanz\\Desktop\\Student Board\\src\\pages\\views\\Details\\index.js",
    "id": "9",
    "type": "ui",
    "name": "Details",
    "label": "Details",
    "parent": "1",
    "children": [],
    "actions": [
        {
            "type": "action",
            "name": "closeDetails",
            "label": "Close Details",
            "parent": "1",
            "source": "9",
            "sourceName": "Details",
            "channels": [
                {
                    "channel": "Fromschoolboard",
                    "target": "7",
                    "targetName": "SchoolBoard"
                },
                {
                    "channel": "Fromstudentboard",
                    "target": "4",
                    "targetName": "StudentBoard"
                }
            ]
        }
    ]
};

export function useInfo() {
    const router = useRouter();

    let data = null;

    if (router.query) {
        if (router.query.session) {
            data = JSON.parse(
                Buffer.from(
                    router.query.session.replace(/\./g, "=").replace(/\-/g, "+").replace(/\_/g, "/"),
                    "base64"
                )
            );
        }
    }

    return {
        ...info,
        session: data 
    };
}

export default useInfo;