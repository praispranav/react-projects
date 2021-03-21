import SideNav from "./sidenav/sidenav"
import './App.css';
import React from "react"
import Man from "./sidenav/man.jpg"
import HeadingBox from "./main/headingbox"


// import Header  from "./header/header"

  function App(){ 
  const wholE = {display:"flex"}
  return (
    <div>
     <div style={wholE}>
      <div className="sidenav" style={{display:"flex",flexDirection:"column",position:"fixed",background:"black",height:"100vh",maxWidth:"100px"}}>
        <SideNav />
        
      </div>
      <div className="main-body">
          <HeadingBox />
      </div>
     </div>
    </div>
  );
}

export default App;
