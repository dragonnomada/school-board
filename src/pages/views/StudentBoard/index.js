import React, { useState, useEffect } from "react";

import useAction from "./useAction";
import useSession from "./useSession";

import SchoolBoard from "../SchoolBoard";

export default function StudentBoard() {

    const [result, session] = useSession();

    const { signOut, publishComment } = useAction();

    const [isCommentModalClosed, setIsCommentModalClosed] = useState(false);

    useEffect(() => {
        setIsCommentModalClosed(false);
    }, [session]);

    return (
        <div className="flex flex-col xbg-gray-200">
            <div className="xw-1/2 flex justify-between items-center p-2 border-b px-8 xbg-blue-500">
                <div>
                    <span className="text-2xl">Student's Board</span>
                </div>
                <div className="flex-grow flex justify-between items-center px-8">
                    <div className="flex items-center px-4">
                        <div className="px-4">
                            <img
                                className="w-16 h-16 rounded-full"
                                src={`https://i.pravatar.cc/300?img=${result?.user?.pictureId || 1}`}
                            />
                        </div>
                        <div className="flex flex-col px-4">
                            <span className="text-gray-700">Welcome</span>
                            <span className="text-gray-500">{result?.username}</span>
                        </div>
                    </div>
                    <div className="px-8">
                        <button
                            className="text-purple-500"
                            onClick={() => signOut()}
                        >Sign Out</button>
                    </div>
                </div>
            </div>
            {
                (result?.comment && !isCommentModalClosed) ? (
                    <div className="w-screen h-screen absolute left-0 top-0 flex justify-center items-center">
                        <div className="bg-white z-10 p-8 border">
                            <div>
                                <span>Do you publish this comment?</span>
                            </div>
                            <div className="flex items-center py-4">
                                <div>
                                    <span><i className="fas fa-quote-left fa-2x"></i></span>
                                </div>
                                <div className="px-4">
                                    <span className="text-xl">{result.comment}</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button className="text-red-500" onClick={() => {
                                    setIsCommentModalClosed(true);
                                }}>No, Dismiss</button>
                                <button className="text-green-500" onClick={() => {
                                    publishComment({ comment: result.comment, username: result.username });
                                }}>Yes, Publish</button>
                            </div>
                        </div>
                        <div className="w-screen h-screen flex bg-gray-200 opacity-50 absolute left-0 top-0"></div>
                    </div>
                ) : null
            }
            <SchoolBoard />
        </div>
    );
}