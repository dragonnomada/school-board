import { useCommonAction } from "../../architector/react/hooks";

export function useAction() {
    // const exampleAction = useCommonAction("ViewName/example");
    const signInAction = useCommonAction("Login/signIn");
    const viewSchoolBoardAction = useCommonAction("Login/viewSchoolBoard");

    const actions = {
        // example: exampleAction
        signIn: signInAction,
            viewSchoolBoard: viewSchoolBoardAction,
    };

    const indexes = [
        // exampletAction
        signInAction,
            viewSchoolBoardAction,
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