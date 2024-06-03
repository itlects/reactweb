import { useState, useRef, useEffect } from "react";

export default function ChangeCount(){
    const [inputValue, setInputValue] = useState("아무개");
    const count = useRef(0);
    useEffect(()=>{
        count.current = count.current + 1;
    });

    return(
        <>
            <input type="text" 
             value={inputValue} 
             onChange={ (e)=> setInputValue(e.target.value) } />
            <h1>Rendering 카운트: {count.current}</h1>
        
        </>

    );
}