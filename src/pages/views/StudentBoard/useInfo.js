import { useRouter } from "next/router";

export const info = {
    "projectFolder": "C:\\Users\\lanz\\Desktop\\Student Board",
    "path": "C:\\Users\\lanz\\Desktop\\Student Board\\src\\pages\\views\\StudentBoard\\index.js",
    "id": "4",
    "type": "ui",
    "name": "StudentBoard",
    "label": "Student Board",
    "parent": "1",
    "children": [
        {
            "id": "7",
            "name": "SchoolBoard"
        }
    ],
    "actions": [
        {
            "type": "action",
            "name": "signOut",
            "label": "Sign Out",
            "parent": "1",
            "source": "4",
            "sourceName": "StudentBoard",
            "channels": [
                {
                    "channel": "Default2",
                    "target": "2",
                    "targetName": "Login"
                }
            ]
        },
        {
            "type": "action",
            "name": "publishComment",
            "label": "Publish Comment",
            "parent": "1",
            "source": "4",
            "sourceName": "StudentBoard",
            "channels": [
                {
                    "channel": "Default",
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