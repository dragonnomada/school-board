import { useCommonAction } from "../../architector/react/hooks";

export function useAction() {
    // const exampleAction = useCommonAction("ViewName/example");
    const signOutAction = useCommonAction("StudentBoard/signOut");
    const publishCommentAction = useCommonAction("StudentBoard/publishComment");

    const actions = {
        // example: exampleAction
        signOut: signOutAction,
            publishComment: publishCommentAction,
    };

    const indexes = [
        // exampletAction
        signOutAction,
            publishCommentAction,
    ];

    return {
        ...actions,
        getActionByName(name) {
            return actions[name];
        },
        getActionByIndex(index) {
            return indexes[index];
        },
    };
}

export default useAction;