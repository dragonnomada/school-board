import { useRouter } from "next/router";

export const info = {
    "projectFolder": "C:\\Users\\lanz\\Desktop\\Student Board",
    "path": "C:\\Users\\lanz\\Desktop\\Student Board\\src\\pages\\views\\Login\\index.js",
    "id": "2",
    "type": "ui",
    "name": "Login",
    "label": "Login",
    "parent": "1",
    "children": [],
    "actions": [
        {
            "type": "action",
            "name": "signIn",
            "label": "Sign In",
            "parent": "1",
            "source": "2",
            "sourceName": "Login",
            "channels": [
                {
                    "channel": "Fromstudent",
                    "target": "4",
                    "targetName": "StudentBoard"
                },
                {
                    "channel": "Withnewcomment",
                    "target": "4",
                    "targetName": "StudentBoard"
                },
                {
                    "channel": "Fail",
                    "target": "2",
                    "targetName": "Login"
                }
            ]
        },
        {
            "type": "action",
            "name": "viewSchoolBoard",
            "label": "View School Board",
            "parent": "1",
            "source": "2",
            "sourceName": "Login",
            "channels": [
                {
                    "channel": "Withoutsession",
                    "target": "7",
                    "targetName": "SchoolBoard"
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