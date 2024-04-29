import React from "react";
import { ReactDOM } from "react";

class Header extends React.Component{
    constructor(props){
        console.log("#1   constructor!!");
        super(props);

        this.state = {
            myfav : "빨강"
        };
    }
/*
    static getDerivedStateFromProps(props, state){
        console.log("#2   getDerivedStateFromProps!!");
        return { myfav: props.favcol}
    }
*/
    shouldComponentUpdate(){
        console.log("#2-1   shouldComponentUpdate!!");
        return true;
    }
    
    componentDidMount(){
        console.log("#4   componentDidMount!!");
        setTimeout(()=>{
            this.setState({myfav: "핑크"});
        }, 3000);
    }
    
    changeColor=()=>{
        console.log("#5   onClick->changeColor!!");
        this.setState({myfav:"녹색"});
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("#7   getSnapshotBeforeUpdate!!");
        document.getElementById("div1").innerHTML=
        "이전 내가 좋아하던 색상...."+prevProps.myfav;
    }
    componentDidUpdate(){
        console.log("#8   componentDidUpdate!!");
        document.getElementById("div2").innerHTML=
        "지금 내가 좋아하는 색상..."+ this.state.myfav;
    }
    render(){
        console.log("#3   render!!");
        return(
            <div>
            <h2>
                내가 좋아하는 색상은....{this.state.myfav}
            </h2>
            <button type="button"  onClick={this.changeColor}>색상변경</button>

            <div id="div1">첫번째</div>
            <div id="div2">두번째</div>
            </div>

        );
    }

}

export default Header;