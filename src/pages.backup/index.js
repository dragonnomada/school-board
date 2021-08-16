export default function App() {
    return (
        <div>
            <h1>Architector PRO - My Project</h1>
            <div>
                <span>This is a generated project.</span>
                <span>You can modify the files of <code>src</code> folder and see the results.</span>
            </div>
            <div style={{
                display: "flex",
                boxSizing: "border-box"
            }}>
                <div style={{
                    padding: "40px",
                    width: "50%",
                    // flexGrow: "1",
                }}>
                    <div>
                        <span>There are the list of Views:</span>
                    </div>
                    <div>
                        <div><a href="/views/Login">Login (Login)</a></div>
                        <div><a href="/views/StudentBoard">Student Board (StudentBoard)</a></div>
                        <div><a href="/views/SchoolBoard">School Board (SchoolBoard)</a></div>
                        <div><a href="/views/Details">Details (Details)</a></div>
                    </div>
                </div>
                <div style={{
                    width: "50%",
                    // flexGrow: "1",
                }}>
                    <img src="/diagram.svg" />
                </div>
            </div>
        </div>
    );
}