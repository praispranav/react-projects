import React from "react"

class Search extends React.Component {
    constructor(){
        super();
        this.state = {
            search:"Your Search Here"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        console.log("submitted")
    }
    render(){
        const coloR = {color:"white",position:"absolute",zIndex:"1"}
        const backGround = {background:"rgb(5, 5, 0)", height:"auto",width:"50vw",marginLeft:"30vw",height:"10%",background:"black",overflow:"auto",alignItems:"center"}
        const submitBtn = {background:"black",color:"white"};
        const SearchStyle = {background:"black", border:"1px 1px grey",width:"50%",marginRight:"0",marginLeft:"0em",padding:"0.8em",borderRadius:"0.4em", marginTop:"0em", color:"white"}
        return(
            <div style={backGround}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" placeholder="Search" style={SearchStyle} onChange={this.handleChange} />
                    <input type="submit" style={submitBtn}/>
                </form>
                <div style={coloR}>
                    <p style={{margin:"0",background:"black",padding:"0.5em",borderRadius:"0.4em",boxShadow:"2px 2px 5px white"}}>{this.state.search}</p>
                </div>
            </div>
        )
    }
}
export default Search;