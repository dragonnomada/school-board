import { useState } from "react";

import useAction from "./useAction";
import useInfo from "./useInfo";
import useSession from "./useSession";

export default function Login() {
    const info = useInfo();

    const [result, session] = useSession();

    const { signIn, viewSchoolBoard } = useAction();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-1/3 border p-8 rounded-lg">
                <div className="flex items-center pb-4">
                    <span className="pr-4"><i className="fas fa-table fa-2x"></i></span>
                    <span className="text-4xl">School Board</span>
                </div>
                <div className="pb-4">
                    <span className="text-3xl text-purple-600">Sign In</span>
                </div>
                <div className="p-4">
                    <div className="py-1">
                        <input
                            className="w-full border-b-2 focus:outline-none focus:border-purple-500 p-1"
                            placeholder="Username"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="py-1">
                        <input
                            className="w-full border-b-2 focus:outline-none focus:border-purple-500 p-1"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    {
                        result?.error ? (
                            <div className="py-2">
                                <span className="text-sm text-red-500">* {result.error}</span>
                            </div>
                        ) : null
                    }
                    {
                        result?.comment ? (
                            <div className="py-2">
                                <span className="text-sm text-purple-500">Sign in to publish your comment: </span>
                                <span className="text-sm text-purple-500 font-bold">{result.comment}</span>
                            </div>
                        ) : null
                    }
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-purple-500 hover:bg-purple-700 text-white px-2 py-1 rounded"
                        onClick={() => {
                            
                            signIn({
                                username,
                                password,
                                comment: result?.comment
                            });
                            
                        }}
                    >Enter to Student's Board</button>
                </div>
            </div>
            <div className="p-8">
                <button
                    className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded text-xl"
                    onClick={() => {
                        viewSchoolBoard();
                    }}
                >View School Board</button>
            </div>
        </div>
    );
}