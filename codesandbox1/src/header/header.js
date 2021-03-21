import React from "react"
import logo from "./logo.svg"
import Nav from "./nav"
import {Route, Switch} from "react-router-dom"
import Search from "./search"
import DashBoard from "../dashboard/dashboard"

class Header extends React.Component{
    constructor(){
        super();
        this.state={
            nav:false,
            search:false
        }
        this.sideNav = this.sideNav.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    // navDisplay(){
    //     if(this.state.nav===true){
    //         return console.log("hello")
    //     }
    // }
    sideNav(){
        this.setState(prevState => {return {nav: !prevState.nav} })
    }
    handleSearch(){
        this.setState(prevState =>{return{search: !prevState.search}})
    }
    render(){
        const navDisplay =  this.state.nav ? {display:"flex"}: {display:"none"};
        const navMobile = window.innerWidth < 400 ? navDisplay : null;
        const flexDesign = {display:"flex",justifyContent:"space-between",position:"fixed", width:"100%",background:"black",color:"white"};
        const logoStyle = {width:"3em",height:"3em"};
        const marginDesign = {margin:"0",padding:"0",position:"stikey"};
        const navM = {margin:"0.9em"};
        const borderB = {border:"1px solid black"};
        const searchDisplay = this.state.search ? {display:"block",position:"absolute"}: {display:"none"};
        return(
            <div>
                <div style={flexDesign} className="nav">
                    <div className="nav-left">
                        <img onClick={this.sideNav}style={marginDesign} src={logo} style={logoStyle} />
                    </div>
                    <div className="nav-middle">
                        <h3 style={marginDesign,navM}>ReactChat</h3>
                    </div>
                    <div className="nav-right">
                        <img onClick={this.handleSearch} style={marginDesign} src={logo} style={logoStyle} />
                    </div>
                </div>
                <div style={borderB}>
                </div>
                <div style={searchDisplay}><Search /></div>
                <div style={{display:"flex"}}>
                    <div className="side-nav" style={navMobile}><Nav /></div>
                    <Switch>
                        <Route path="/" component={DashBoard}/>
                    </Switch>
                </div>  
            </div>
        )
    }
}
export default Header;