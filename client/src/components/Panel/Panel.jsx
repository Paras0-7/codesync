import { useState } from "react"
import { Client } from "../Client/Client"
import  './Panel.scss'
import { useParams } from "react-router-dom"

export const Panel = function({clients}){

    
    const {roomId} = useParams()

    const copyRoomId = function(){

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
            <button className={`btn leave-btn`}>Leave</button>
        </div>
    </div>
}