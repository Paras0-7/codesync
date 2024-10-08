
import { CodeEditor } from "../components/CodeEditor/CodeEditor"
import { Panel } from "../components/Panel/Panel"
import { useSocket } from "../hooks/useSocket"

export const Editor = function(){   

    const {clients} = useSocket();

    return <div className="editor-wrapper">
            <Panel clients={clients}/>
            <CodeEditor/>
    </div>
}