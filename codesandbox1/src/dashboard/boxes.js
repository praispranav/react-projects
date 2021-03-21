import React from "react"
import "./dashboard.css"
import bg from "../images/bg5.jpg"

function Boxes(){
    const imgStyle= {width:"100%",maxWidth:"400px"}
    const HeadingStyle = {margin:"0 0 0 0",padding:"0.5em 0.5em 0em 0.5em",color:"black"}
    return(
        <div className="container">
            <div className="container-content">
                <div style={{color:"white",margin:"0 0 1em 0",display:"flex",justifyContent:"space-between",width:"100%",padding:"0"}} className="heading">
                    <h4 style={HeadingStyle}>Pranav Kumar</h4>
                    <h4 style={HeadingStyle}>...</h4>
                </div>
                <hr />
            </div>
            <img src={bg} style={imgStyle} alt="none" />
        </div>
    )
}
export default Boxes;