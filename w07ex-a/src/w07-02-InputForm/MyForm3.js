import React, { useState } from "react";
import { ReactDOM  } from "react";

function MyForm(){
    const [inputs, setInputs] = useState({});
    
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values=>({...values, [name]:value}))

    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(inputs);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>name을 입력하세요:</label>
            <input type="text" name="username" value={inputs.username||""} 
            onChange={handleChange}></input>
            <input type="number" name="age" value={inputs.age||""} 
            onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    );

}
export default MyForm;