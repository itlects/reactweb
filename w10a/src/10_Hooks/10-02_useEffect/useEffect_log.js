import { useState, useEffect } from "react";
const UseEffectCleanup=()=>{
    const [name, setName] = useState('초기 닉네임');

    const onClick = ()=>{
        setName('닉네임 변경!!');
    }

    useEffect(()=>{
        console.log("콤포넌트 나타남");
        console.log(name);
        return()=>{
            console.log("return-> cleanup 함수 호출");
        }
    });

    return(
        <>
        {name}<button onClick={onClick}>변경</button>
        </>
    );
}

export default UseEffectCleanup;