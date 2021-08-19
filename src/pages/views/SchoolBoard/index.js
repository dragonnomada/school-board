import React from "react";

import useAction from "./useAction";
import useInfo from "./useInfo";
import useSession from "./useSession";

export default function SchoolBoard() {
    const [result, session] = useSession();

    const { enterAsStudent, addComment } = useAction();

    return (
        <div className="xw-1/2 flex flex-col p-8 xbg-red-500">
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
            <div className="flex flex-col">
                {(!result || result.comments.length === 0) ? (
                    <div className="flex p-8">
                        <span className="text-gray-500 italic">Not comments</span>
                    </div>
                ) : null}
                {result ? result.comments.map(comment => {
                    return (
                        <StudentComment
                            key={comment._id}
                            comment={comment}
                            username={result?.username}
                        />
                    );
                }) : null}
            </div>
        </div>
    );
}

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
                    <img
                        className="w-16 h-16 rounded-full"
                        src={`https://i.pravatar.cc/150?img=${comment.pictureId || 1}`}
                    />
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