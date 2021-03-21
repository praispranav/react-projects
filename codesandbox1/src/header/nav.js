import React from "react"
import "./header.css"


class Nav extends React.Component{
    render(){
        const sideNav = {background:"black",width:"30vw",height:"93vh",position:"fixed",maxWidth:"200px",zIndex:"1000"}
        const margiN = {margin:"0",padding:"1em 0 0 0",color:"white",transition:"2s"}
        const stYle = {listStyleType:"none",fontSize:"16"}
        return(
            <div>
                <div style={sideNav} className="sidenav-position">
                    <ul style={margiN} class="side-nav-list">
                        <li>Login</li>
                        <li>SignUp</li>
                        <li>Discussion</li>
                        <li>Feedback</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Nav;