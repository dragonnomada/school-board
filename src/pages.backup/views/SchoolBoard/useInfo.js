import { useRouter } from "next/router";

export const info = {
    "projectFolder": "C:\\Users\\lanz\\Desktop\\Student Board",
    "path": "C:\\Users\\lanz\\Desktop\\Student Board\\src\\pages\\views\\SchoolBoard\\index.js",
    "id": "7",
    "type": "ui",
    "name": "SchoolBoard",
    "label": "School Board",
    "parent": "4",
    "children": [],
    "actions": [
        {
            "type": "action",
            "name": "addComment",
            "label": "Add Comment",
            "parent": "4",
            "source": "7",
            "sourceName": "SchoolBoard",
            "channels": [
                {
                    "channel": "Withsession",
                    "target": "4",
                    "targetName": "StudentBoard"
                },
                {
                    "channel": "Withoutsession",
                    "target": "2",
                    "targetName": "Login"
                }
            ]
        },
        {
            "type": "action",
            "name": "viewDetails",
            "label": "View Details",
            "parent": "1",
            "source": "7",
            "sourceName": "SchoolBoard",
            "channels": [
                {
                    "channel": "Default",
                    "target": "9",
                    "targetName": "Details"
                }
            ]
        },
        {
            "type": "action",
            "name": "enterAsStudent",
            "label": "Enter as Student",
            "parent": "1",
            "source": "7",
            "sourceName": "SchoolBoard",
            "channels": [
                {
                    "channel": "Default",
                    "target": "2",
                    "targetName": "Login"
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