import {memo} from "react";
const Todos = ({todos})=>{
    console.log("Todos를 렌더링합니다!");

    return(
        <>
            <h2>Todos 목록보기</h2>
            
            { 
                todos.map((todo, index) =>{
                    return <p key={index}>{todo}</p>
                })
            }
        </>

    );
}

export default memo(Todos);