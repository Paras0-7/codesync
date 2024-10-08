import { useState } from "react"
import { Client } from "../Client/Client"
import  './Panel.scss'
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"

export const Panel = function({clients}){

    
    const {roomId} = useParams();
    const navigate = useNavigate();

    const copyRoomId = async function(){
            try{
                await navigator.clipboard.writeText(roomId)
                toast.success('Room Id Copied!!')
            }catch(err){

            }
    }

    const leaveRoom = function(){
        navigate('/')
    }

    return <div className="panel">
        <div>
            <div className="img-container">
                <img src="/logo.png" alt="logo"/>
            </div>
            <h3>Connected</h3>
            <div className='client-list'>
                {
                    clients.map((client)=>{
                        return <Client name={client.userName} key={client.socketId}/>
                    })
                }
            </div>
        </div>
        <div className='actions'>

            <button className={`btn copy-btn`} onClick={copyRoomId}>Copy Room ID</button>
            <button className={`btn leave-btn`} onClick={leaveRoom}>Leave</button>
        </div>
    </div>
}