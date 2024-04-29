import React from "react";
import { ReactDOM } from "react";

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            myfav : "빨강"
        };
    }

    render(){
        return(
            <h2>
                내가 좋아하는 색상은....{this.state.myfav}
            </h2>
        );
    }

}

export default Header;