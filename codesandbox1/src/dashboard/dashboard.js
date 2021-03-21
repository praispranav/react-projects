import React from "react"
import "./dashboard.css"
import Boxes from "./boxes"

class DashBoard extends React.Component{
    render(){
        return(
            <div className="main-bg">
                <Boxes />
            </div>
        )
    }
}
export default DashBoard;