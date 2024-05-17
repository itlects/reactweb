import {memo} from "react";

const Todos2 = ({todos})=>{
    console.log("Todos를 렌더링합니다!");

    return(
        <>
            <h2>Todos2 목록보기</h2>
            
            { 
                todos.map((todo, index) =>{
                    return <p key={index}>{todo}</p>
                })
            }
        </>

    );
}

export default memo(Todos2);