import { CodeEditor } from "../components/CodeEditor/CodeEditor"
import { Panel } from "../components/Panel/Panel"

export const Editor = function(){
    return <div className="editor-wrapper">
            <Panel/>
            <CodeEditor/>
    </div>
}