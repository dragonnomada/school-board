import { useState } from "react";

import { CommonContext } from "./architector/react/hooks";

import "./style.css";

export default function Model({ Component, ...props }) {
    const [isLock, setIsLock] = useState(false);
    const [action, setAction] = useState("");

    return (
        <CommonContext.Provider value={{
            action,
            isLock,
            lock(action = "unknown") {
                setAction(action);
                setIsLock(true);
            },
            unlock() {
                setIsLock(false);
            }
        }}>
            <CommonContext.Consumer>
                {
                    ({ isLock, action }) => {
                        return (
                            <div className="w-screen h-screen">
                                <Component {...props} />
                                {
                                    isLock && (
                                        <div className="w-screen h-screen absolute left-0 top-0 flex justify-center items-center z-20">
                                            <div className="bg-white z-40 p-8 rounded">
                                                <span className="px-2"><i className="fas fa-spinner fa-spin"></i></span>
                                                <span>Running action <strong>{action}</strong></span>
                                            </div>
                                            <div className="w-screen h-screen bg-gray-200 opacity-80 absolute left-0 top-0 z-30"></div>
                                        </div>
                                    )
                                }
                            </div>
                        );
                    }
                }
            </CommonContext.Consumer>
        </CommonContext.Provider>
    );
}