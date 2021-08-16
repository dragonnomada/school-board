// Architector - React Prefab

export default function Prefab({ children, info, getActionByName }) {
    return (
        <div>
            <h1>{info.label}</h1>
            <div>
                {children || null}
            </div>
            <div>
                <h2>Project Folder:</h2>
                {/* <code>{info.projectFolder}</code> */}
                <a href={`vscode://file/${info.projectFolder}`}>{info.projectFolder}</a>
            </div>
            <div>
                <h2>Source:</h2>
                {/* <code>{info.path}</code> */}
                <a href={`vscode://file/${info.path}`}>{info.path}</a>
                <div>
                    <br />
                    <span><small><strong>Note:</strong> Edit this file to your custom view.</small></span>
                </div>
            </div>
            <div>
                <h2>Session:</h2>
                <code>
                    <pre>{JSON.stringify(info.session, null, 2)}</pre>
                </code>
            </div>
            <div>
                <h2>Actions:</h2>
                {
                    info.actions.map(action => {
                        const testAction = getActionByName(action.name);

                        return (
                            <div>
                                <h3>{action.label} Action</h3>
                                <button onClick={() => {
                                    testAction("test data here").catch(error => {
                                        alert(`${info.name}/${action.name}: ${error}`);
                                    });
                                }}>Test {action.label} Action</button>
                                <div>
                                    <h4>Channels:</h4>
                                    {
                                        action.channels.map(channel => {
                                            return (
                                                <div>
                                                    <h5>ON <code>{channel.channel}</code> GO TO <code>{channel.targetName}</code></h5>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h2>Help:</h2>
                <div>
                    <span>Hello, this is a prefab component for the <strong>{info.label}</strong>, </span>
                    <span>it was generated from the <strong>diagram</strong>.</span>
                </div>
                <div>
                    <br />
                    <span>You can edit this in <a href={`vscode://file/${info.path}`}>{info.path}</a> (this link will open Visual Code).</span>
                </div>
                <div>
                    <br />
                    <span><strong>Warning:</strong> Print this short documentation for the future (Ctrl + P).</span>
                </div>
                <div>
                    <br />
                    <span>Try edit to:</span>
                </div>
                <div>
                    <code style={{ color: "cornflowerblue" }}>
                        <pre>
                            {`
import useAction from "./useAction";
import useInfo from "./useInfo";

export default ${info.name}() {
    return <h1>Hello ${info.label}</h1>
}
                            `}
                        </pre>
                    </code>
                </div>
                <div>
                    <br />
                    <span>If you need reset this prefab use:</span>
                </div>
                <div>
                    <code style={{ color: "cornflowerblue" }}>
                        <pre>
                            {`
import Prefab from "../../architector/react/Prefab";

import useAction from "./useAction";
import useInfo from "./useInfo";

export default function ${info.name}() {
    const info = useInfo();

    const { getActionByName } = useAction();

    return <Prefab info={info} getActionByName={getActionByName} />;
}
                            `}
                        </pre>
                    </code>
                </div>
            </div>
            <div>
                <h2>Example: How to use the view info?</h2>
                <div>
                    <code style={{ color: "cornflowerblue" }}>
                        <pre>
                            {`
import useInfo from "./useInfo";

export default function Screen1() {
    const info = useInfo();

    return <div>JSON.stringify(info)</div>
}
`}
                        </pre>
                    </code>
                </div>
            </div>
            <div>
                <h2>Full Info:</h2>
                <div>
                    <code>
                        <pre>{JSON.stringify(info, null, 2)}</pre>
                    </code>
                </div>
            </div>
            {/* <button onClick={() => defaultAction("<replace with custom data>")}>Default</button> */}
        </div>
    );
}