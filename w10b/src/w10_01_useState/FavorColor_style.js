import {useState} from 'react';

const FavorColor=()=>{

    const [color, setColor] = useState('빨강');
    const [name, setName] = useState('홍길동');
    const [year, setYear] = useState('1995');

    const myStyle = {
        color: 'red',
        backgroundColor: 'yellow'
        
    }
    const myProfile=()=>{
        setColor('검은색'); 
        setName('홍길남'); 
        setYear('2001');
    }

    return(
        <>
          <h1>내가 좋아하는 색상: <span style={myStyle}> {color} </span> 입니다.</h1>
          <h1>나는 이름이:  <span style={myStyle}>{name} </span>입니다.</h1>
          <h1>나는 태어난년도는:  <span style={myStyle}>{year} </span>입니다.</h1>
          <button onClick={myProfile} style={{width:'400px', height:'80px', fontSize:'20px', color:'blue', backgroundColor:'pink'}} type='button'>나의소개</button>
          
        </>
    );
}

export default FavorColor;