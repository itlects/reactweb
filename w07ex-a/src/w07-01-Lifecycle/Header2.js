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

    static getDerivedStateFromProps(props, state){
        console.log("#2   getDerivedStateFromProps!!");
        return { myfav: props.favcol}
    }
    render(){
        console.log("#3   render!!");
        return(
            <h2>
                내가 좋아하는 색상은....{this.state.myfav}
            </h2>
        );
    }

}

export default Header;