import React from "react";
import { ReactDOM } from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor: "yellow"});
        },3000);
    }
    shouldComponentUpdate(){
        return true;
    }
    changeColor =  ()=>{
        this.setState({favoritecolor:"blue"});
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML=
        "이전 내가 좋아하던 색상은 ..."+ prevState.favoritecolor;
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML=
        "지금 내가 좋아하는 색상은..."+this.state.favoritecolor;
    }
    render(){
        return(
        <div>
            <h1>내가 가장좋아하는 색상은...{this.state.favoritecolor} </h1>
            <button type="button" onClick={this.changeColor}>색상변경하기</button>

            <div id="div1"></div>
            <div id="div2"></div>
        </div>
        );
    }

}

export default Header;