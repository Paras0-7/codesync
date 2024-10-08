import { initSocket } from "../socket";
import Actions  from "../actions/Actions";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const useSocket = function(){

    const socketRef = useRef(null);
    const [clients, setClients] = useState([])
    const location = useLocation();
    const {roomId} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const init = async function(){
            socketRef.current = await initSocket();

            socketRef.current.on('connect_error', (err)=>handleError(err))
            socketRef.current.on('connect_failed', (err)=>handleError(err))

            
            socketRef.current.emit(Actions.JOIN, {
                roomId,
                userName: location.state.user
            })


            // Listening for joined events

            socketRef.current.on('joined', ({clients, socketId, userName})=>{
                    if(userName !== location.state.user){
                        toast.success(`${userName} joined the room!!`)
                    }
                    setClients(clients)
            })


            // Listening for disconnecting events

            socketRef.current.on('disconnected', ({socketId, userName})=>{
                toast.success(`${userName} left the room`)
                setClients((clients)=>{
                    return clients.filter(client=> client.socketId!==socketId)
                })
            })
            function handleError(err){
                console.log('Socket Error', err);
                toast.error('Socket Connection Faled, try again later.')
                navigate('/')
            }
        }

        init();

        return ()=>{
            socketRef.current?.disconnect();
            socketRef.current?.off('joined')
            socketRef.current?.off('diconnected')
            
        }
    },[])

    return {
        clients,
        socketRef,
        roomId
    }
}