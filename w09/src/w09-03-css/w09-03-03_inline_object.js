const StyleHeader = ()=>{
  const myStyle ={
    color:'white',
    backgroundColor:'DodgerBlue',
    padding: '10px',
    fontFamily: 'Sans-Serif'
  };

  return(
    <>
      <h1 style={myStyle}>Hello inline style!</h1>
      <p>inline css style를 적용-했습니다 !</p>
    </>
  );

}

export default StyleHeader;