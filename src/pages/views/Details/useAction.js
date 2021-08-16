import { useCommonAction } from "../../architector/react/hooks";

export function useAction() {
    // const exampleAction = useCommonAction("ViewName/example");
    const closeDetailsAction = useCommonAction("Details/closeDetails");

    const actions = {
        // example: exampleAction
        closeDetails: closeDetailsAction,
    };

    const indexes = [
        // exampletAction
        closeDetailsAction,
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