import React from "react";

import useAction from "./useAction";
import useSession from "./useSession";

export default function Details() {
    const [result, session] = useSession();

    const { closeDetails } = useAction();

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center border rounded-lg p-4">
                <div className="flex items-center pr-16">
                    <div className="p-4">
                        <img
                            className="w-16 h-16 rounded-full"
                            src={`https://i.pravatar.cc/150?img=${result?.comment.pictureId || 1}`}
                        />
                    </div>
                    <div>
                        <span className="text-gray-500">{result?.comment.username}</span>
                    </div>
                </div>
                <div className="flex-grow flex">
                    <div>
                        <span><i className="fas fa-quote-left fa-2x"></i></span>
                    </div>
                    <div className="text-gray-500 px-8 py-2">
                        <span>{result?.comment.comment}</span>
                    </div>
                </div>
                <div className="text-gray-500 px-8 py-2">
                    <span>{new Date(result?.comment.at).toLocaleString()}</span>
                </div>
                <div className="w-full flex justify-center border-t py-2">
                    <button
                        className="bg-purple-500 text-white py-1 px-2 rounded"
                        onClick={() => {
                            closeDetails({
                                username: result?.username
                            });
                        }}
                    >
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    );
}