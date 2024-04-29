import React from "react";
import { ReactDOM } from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:"yellow"});
        },3000);
    }
    render(){
        return(
            <h1>내가 가장좋아하는 색상은...{this.state.favoritecolor} </h1>
        );
    }

}

export default Header;