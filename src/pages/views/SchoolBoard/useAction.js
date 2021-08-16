import { useCommonAction } from "../../architector/react/hooks";

export function useAction() {
    // const exampleAction = useCommonAction("ViewName/example");
    const addCommentAction = useCommonAction("SchoolBoard/addComment");
    const viewDetailsAction = useCommonAction("SchoolBoard/viewDetails");
    const enterAsStudentAction = useCommonAction("SchoolBoard/enterAsStudent");

    const actions = {
        // example: exampleAction
        addComment: addCommentAction,
            viewDetails: viewDetailsAction,
            enterAsStudent: enterAsStudentAction,
    };

    const indexes = [
        // exampletAction
        addCommentAction,
            viewDetailsAction,
            enterAsStudentAction,
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