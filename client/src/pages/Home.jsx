import {  useState } from 'react';
import {v4 as uuidV4} from 'uuid'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const Home = function(){

    const [roomId, setRoomID] = useState("");
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    const createNewRoom = (e)=>{
        e.preventDefault();
        const id = uuidV4();
        setRoomID(id);
        toast.success('Created a new room!');

    }

    const joinRoom = ()=>{

        if(!roomId || !user){
            toast.error('Room ID & User Name is required');
            return;
        }

        navigate(`/editor/${roomId}`, {
            state :{
                user
            }
        })

    }


    return <div className="home-wrapper">
        <div className="form-wrapper">
            <img src="/logo.png" alt="logo"/>
            <h4 className="label">Paste invitation ROOM ID</h4>
            <div className="input-group">
                <input type="text" placeholder="ROOM ID" value={roomId} onChange={(e)=>setRoomID(e.target.value)}/>
                <input type="text" placeholder="User Name" value={user} onChange={(e)=>setUser(e.target.value)}/>
                <button className="btn join-btn" onClick={joinRoom}> Join</button>
                <span className="info">If you don't have an invite code &nbsp;<a onClick= {createNewRoom} href="">new room</a></span>
            </div>
        </div>
    </div>
}