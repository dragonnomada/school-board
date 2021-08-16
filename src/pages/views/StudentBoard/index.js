import { useState, useEffect } from "react";

// Import the Prefab component (show the view's info and help)
import Prefab from "../../architector/react/Prefab";

// Import the action handler (react hook)
import useAction from "./useAction";
// Import the info handler (react hook)
import useInfo from "./useInfo";
// Import the session received (react hook)
import useSession from "./useSession";

// Subview SchoolBoard: Use this subview inside your component
import SchoolBoard from "../SchoolBoard";

export default function StudentBoard() {
    // Get the info
    const info = useInfo();

    // Get the session and result
    const [result, session] = useSession();

    // Get the action selector by name
    const { signOut, publishComment } = useAction();

    const [isCommentModalClosed, setIsCommentModalClosed] = useState(false);

    useEffect(() => {
        setIsCommentModalClosed(false);
    }, [session]);

    // Return the Prefab component to show the view's info and test the actions
    return (
        <div className="flex flex-col xbg-gray-200">
            {/* <span>{JSON.stringify(info)}</span> */}
            {/* <span>{JSON.stringify(session)}</span> */}
            <div className="xw-1/2 flex justify-between items-center p-2 border-b px-8 xbg-blue-500">
                <div>
                    <span className="text-2xl">Student's Board</span>
                </div>
                {/* Corregido */}
                {/* <div>
                    {JSON.stringify(session)}
                </div> */}
                <div className="flex-grow flex justify-between items-center px-8">
                    <div className="flex items-center px-4">
                        <div className="px-4">
                            <img className="w-16 h-16 rounded-full" src={`https://i.pravatar.cc/300?img=${result?.user?.pictureId || 1}`} />
                        </div>
                        <div className="flex flex-col px-4">
                            <span className="text-gray-700">Welcome</span>
                            <span className="text-gray-500">{result?.username}</span>
                        </div>
                    </div>
                    <div className="px-8">
                        <button className="text-purple-500" onClick={() => signOut()}>Sign Out</button>
                    </div>
                </div>
            </div>
            {
                (result?.comment && !isCommentModalClosed) && (
                    <div className="w-screen h-screen absolute left-0 top-0 flex justify-center items-center">
                        <div className="bg-white z-10 p-8 border">
                            <div>
                                <span>¿Deseas publicar este comentario?</span>
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
                                }}>Descartar</button>
                                <button className="text-green-500" onClick={() => {
                                    publishComment({ comment: result.comment, username: result.username });
                                }}>Publicar</button>
                            </div>
                        </div>
                        <div className="w-screen h-screen flex bg-gray-200 opacity-50 absolute left-0 top-0"></div>
                    </div>
                )
            }
            <SchoolBoard />
        </div>
    );
}