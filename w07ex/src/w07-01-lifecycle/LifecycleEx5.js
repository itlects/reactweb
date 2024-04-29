import React from "react";
import { ReactDOM } from "react";

class LifecycleEx5 extends React.Component{
    static getDerivedStateFromProps(props, state){
        console.log("2.  getDerivedStateFromProps  call :  +'props.prop_value");
        return {tmp_state:props.prop_value}
    }

    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
        console.log('1.  constructor call ');
    }
    componentDidMount(){
        console.log('4.  componentDidMount Call');
        console.log('5.  tmp_state:  '+ this.state.tmp_state);
        this.setState({tmp_state2: true});

        setTimeout(()=>{
            this.setState({favoritecolor: "yellow"});
            console.log('6.  setState Call');
        },3000);
    }
    shouldComponentUpdate(){
        return true;
    }
    changeColor =  ()=>{
        this.setState({favoritecolor:"blue"});
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('7.  getSnapshotBeforeUpdate Call');
        document.getElementById("div1").innerHTML=
        "이전 내가 좋아하던 색상은 ..."+ prevState.favoritecolor;
    }
    componentDidUpdate(){
        console.log('8.  componentDidUpdate Call');
        document.getElementById("div2").innerHTML=
        "지금 내가 좋아하는 색상은..."+this.state.favoritecolor;
    }
    render(){
        console.log('3.  render  Call');
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

export default LifecycleEx5;