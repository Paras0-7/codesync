import { Link } from "react-router-dom"

export const Home = function(){
    return <div className="home-wrapper">
        <div className="form-wrapper">
            <img src="/logo.png" alt="logo"/>
            <h4 className="label">Paste invitation ROOM ID</h4>
            <div className="input-group">
                <input type="text" placeholder="ROOM ID"/>
                <input type="text" placeholder="User Name"/>
                <button className="btn join-btn"> Join</button>
                <span className="info">If you don't have an invite code &nbsp;<Link to="">new room</Link></span>
            </div>
        </div>
    </div>
}