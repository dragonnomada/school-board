import { useEffect, useState } from "react";

// Import the Prefab component (show the view's info and help)
import Prefab from "../../architector/react/Prefab";

// Import the action handler (react hook)
import useAction from "./useAction";
// Import the info handler (react hook)
import useInfo from "./useInfo";
// Import the session received (react hook)
import useSession from "./useSession";

// Has not subviews

function StudentComment({ username, comment }) {
    const { viewDetails } = useAction();

    return (
        <div 
            className="flex items-center border-b p-4 hover:bg-gray-200 cursor-pointer"
            onClick={() => {
                viewDetails({
                    username,
                    comment
                });
            }}
        >
            <div className="flex items-center pr-16">
                <div className="p-4">
                    <img className="w-16 h-16 rounded-full" src={`https://i.pravatar.cc/150?img=${comment.pictureId || 1}`} />
                </div>
                <div>
                    <span className="text-gray-500">{comment.username}</span>
                </div>
            </div>
            <div className="flex-grow flex justify-end items-end">
                <div>
                    <span><i className="fas fa-quote-left fa-2x"></i></span>
                </div>
                <div className="text-gray-500 px-8 py-2">
                    <span>{comment.comment}</span>
                </div>
            </div>
        </div>
    );
}

export default function SchoolBoard() {
    // Get the info
    const info = useInfo();

    // Get the session and result
    const [result, session] = useSession();

    // Get the action selector by name
    const { enterAsStudent, addComment } = useAction();

    // Return the Prefab component to show the view's info and test the actions
    return (
        <div className="p-8">
            <div>
                <span className="text-4xl">School Board</span>
            </div>
            <div className="flex">
                <div className="pr-4 p-2">
                    <button onClick={() => {
                        const comment = prompt("Escribe tu comantario:");

                        if (comment) {
                            addComment({ comment, username: result?.username });
                        }
                    }}>Add Comment</button>
                </div>
                <div className="p-2">
                    <button onClick={() => enterAsStudent()}>Sign In</button>
                </div>
            </div>
            <div>
                {(!result || result.comments.length === 0) && (
                    <div className="flex p-8">
                        <span className="text-gray-500 italic">Not comments</span>
                    </div>
                )}
                {result && result.comments.map(comment => {
                    return <StudentComment key={comment._id} comment={comment} username={result?.username} />
                })}
            </div>
        </div>
    );
}