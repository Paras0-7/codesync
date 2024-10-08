import { useEffect, useRef } from "react"
import CodeMirror from 'codemirror';
import 'codemirror/theme/dracula.css'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'

export const CodeEditor = function({socketRef, roomId}){

    const editorRef = useRef(null);
    useEffect(()=>{
        
        const editorInstance =   CodeMirror.fromTextArea(editorRef.current, {
                mode: {
                    name: 'javascript', 
                    json: true
                },
                theme: 'dracula',
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers:true
            })

        editorInstance.on('change', (instance, changes)=>{

            const {origin} = changes;
            const code = instance.getValue();
            if(origin!== 'setValue'){
                socketRef.current.emit('code_change', {
                    roomId,
                    code
                })
            }


        }) 
        
        if(socketRef.current){
            socketRef.current.on('code_change',({code})=>{
                if(code!== null){
                    editorInstance.setValue(code)
                }
            })
        }

        return ()=>{
            if (editorInstance) {
                editorInstance.toTextArea();
            }

            socketRef.current.off('code_change')
        }
    },[socketRef.current])
    return <textarea id="editor" ref={editorRef}/>
}