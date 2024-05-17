const RedHeader = ()=>{
    const myStyle = {
        color:'red', 
        backgroundColor:'green', 
        padding:'20px', 
        margin:'20px', 
        fontFamily:'sans-serif' 
    }
    return(
        <>
            <p>inline 스타일 적용한 H1태그: </p>
            <h1 style={{color:'red' }}>가나다라마바사 123456</h1>
            <h1 style={{color:'red', backgroundColor:'skyblue' }}>가나다라마바사 123456</h1>
            <h1 style={{color:'red', backgroundColor:'yellow', padding:'20px' }}>가나다라마바사 123456</h1>
            <h1 style={myStyle}>가나다라마바사 123456</h1>

        </>


    );
}


export default RedHeader;