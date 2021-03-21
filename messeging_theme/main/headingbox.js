import React from "react"
import logo from "../sidenav/logo.svg"
import Msg from "./msg"

class HeadingBox extends React.Component{
    constructor(){
        super();
        this.state = {
            null:null
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        console.log("hello")
    }
    render(){
        const imgWidth = {width:"2.5em"}
        const messageInput = {padding:"0.5em",width:"70vw", height:"4em",background:"black",borderStyle:"none"}
        return(
            <div style={{background:"black"}}>
                <div className="main-heading">
                    <h3 style={{padding:"0.5em 0 1em 0.3em",margin:"0"}}>Pranav Kumar</h3>
                    <h3 onClick={this.handleClick} style={{padding:"0.5em 0.5em 1em 0.3em",margin:"0"}}>...</h3>
                </div>
                <div className="main-message">
                    <Msg />
                </div>
                <div className="main-bottom">
                    <div className="main-bottom-type">
                        <form onSubmit={this.handleSubmit}>
                            <input style={messageInput} placeholder="Type Your Text Here......" type="text" onChange={this.handleChange}/>
                        </form>
                    </div>
                    <div className="bottom-bottom">
                       <div className="left-bottom-bottom">
                            <img src={logo} alt="none" style={imgWidth}/>
                            <img src={logo} alt="none" style={imgWidth}/>
                            <img src={logo} alt="none" style={imgWidth}/>
                            <img src={logo} alt="none" style={imgWidth}/>
                       </div>
                       <div className="right-bottom-bottom">
                            <img src={logo} alt="none" style={imgWidth}/>
                            <img src={logo} alt="none" style={imgWidth}/>
                       </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default HeadingBox;