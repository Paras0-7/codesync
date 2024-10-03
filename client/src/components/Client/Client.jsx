import Avatar from "react-avatar"
import'./Client.scss'
export const Client = function({name}){
    return <div className='client'>
            <Avatar name={name} size={50} round="15px"/>
            <span>{name}</span>
        </div>
}