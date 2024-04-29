import React, { useState } from "react";
import { ReactDOM  } from "react";

function MyForm(){
    const [name, setName] = useState("");
    return(
        <form>
            <label>name을 입력하세요:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input type="submit"></input>
        </form>
    );

}
export default MyForm;