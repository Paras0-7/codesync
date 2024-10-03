import { useState } from "react"
import { Client } from "../Client/Client"
import  './Panel.scss'

export const Panel = function(){

    const [clients, setClients] = useState([{socketId:1, userName: 'Paras Rawat'},{socketId:1, userName: 'Rahul Don'},{socketId:1, userName: 'Paras Rawat'}])
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

            <button className={`btn copy-btn`}>Copy Room ID</button>
            <button className={`btn leave-btn`}>Leave</button>
        </div>
    </div>
}