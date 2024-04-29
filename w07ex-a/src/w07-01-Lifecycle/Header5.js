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
    /*
    componentDidMount(){
        console.log("#4   componentDidMount!!");
        setTimeout(()=>{
            this.setState({myfav: "핑크"});
        }, 3000);
    }
    */
    changeColor=()=>{
        console.log("#5   onClick->changeColor!!");
        this.setState({myfav:"녹색"});
    }
    render(){
        console.log("#3   render!!");
        return(
            <div>
            <h2>
                내가 좋아하는 색상은....{this.state.myfav}
            </h2>
            <button type="button"  onClick={this.changeColor}>색상변경</button>

            </div>

        );
    }

}

export default Header;