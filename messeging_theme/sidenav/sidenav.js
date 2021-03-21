import React from "react"
import man from "./man.jpg"
import "../App.css"
import logo from './logo.svg';

function SideNav(){
    const imgWidth = {width:"16vw"}
    return(
        <div>
            <div className="s"><img src={man} style={{width:"16vw",padding:"0 0 1em 0"}} /></div>
            <div className="sidenav-con"><img src={logo} className="App-logo" style={imgWidth} /></div>
            <div className="sidenav-con"><img src={logo} className="App-logo" style={imgWidth} /></div>
            <div className="sidenav-con"><img src={logo} className="App-logo" style={imgWidth} /></div>
            <div className="sidenav-con"><img src={logo} className="App-logo" style={imgWidth} /></div>
            <div className="sidenav-con"><img src={logo} className="App-logo" style={imgWidth} /></div>
            <div className="sidenav-con"><img src={logo} className="App-logo" style={imgWidth} /></div>
        </div>
    )   
}
export default SideNav;