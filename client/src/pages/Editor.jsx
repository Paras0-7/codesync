
import { CodeEditor } from "../components/CodeEditor/CodeEditor"
import { Panel } from "../components/Panel/Panel"
import { useSocket } from "../hooks/useSocket"

export const Editor = function(){   

    const {clients, socketRef, roomId} = useSocket();

    return <div className="editor-wrapper">
            <Panel clients={clients}/>
            <CodeEditor socketRef={socketRef} roomId={roomId}/>
    </div>
}