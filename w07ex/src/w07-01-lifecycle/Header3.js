import React from "react";
import { ReactDOM } from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate(){
        return true;
    }
    changeColor =  ()=>{
        this.setState({favoritecolor:"blue"});
    }
    render(){
        return(
        <div>
            <h1>내가 가장좋아하는 색상은...{this.state.favoritecolor} </h1>
            <button type="button" onClick={this.changeColor}>색상변경하기</button>
        </div>
        );
    }

}

export default Header;