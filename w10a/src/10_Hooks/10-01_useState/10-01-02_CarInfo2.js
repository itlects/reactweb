import { useState } from "react";
import './colorStyle.css';

const CarInfo = ()=>{
    const [mycar, setMycar] = useState({
        brand:'현대차',
        model: '산타페',
        year:'2022',
        color:'빨강'
    });
    const buttonStyle={width:'100px', height:'80px', fontSize:'20px'};
    // const resultStyle={
    //     color:'red', 
    //     backgroundColor:'yellow',
    // };
    const updateInfo_red = ()=>{
        setMycar(info=>{
            return {
                ...info, year:'2023', model:'그랜저', color:'red'
            }

        });
    }
    const updateInfo_blue = ()=>{
        setMycar(info=>{
            return {
                ...info, year:'2023', model:'그랜저', color:'blue'
            }

        });
    }
    const updateInfo_green = ()=>{
        setMycar(info=>{
            return {
                ...info, year:'2023', model:'그랜저', color:'green'
            }

        });
    }
    const updateInfo_yellow = ()=>{
        setMycar(info=>{
            return {
                ...info, year:'2023', model:'그랜저', color:'yellow'
            }

        });
    }
   
    return(
        <>
            <div>
                <h1>내차 정보:  </h1>
                {/* <p>내차의 색상: <span style={resultStyle} className={color}>{color}</span></p> */}
                <p>내차의 제조사: <span className={mycar.brand}>{mycar.brand}</span></p>
                <p>내차의 차량모델: <span className={mycar.model}>{mycar.model}</span></p>
                <p>내차의 제조년: <span className={mycar.year}>{mycar.year}</span></p>
                <p>내차의 색상: <span className={mycar.color}>{mycar.color}</span></p>
            </div>
            <button style={buttonStyle} onClick={updateInfo_blue}>색상변경(파랑)</button>
            <button style={buttonStyle} onClick={updateInfo_red}>색상변경(빨강)</button>
            <button style={buttonStyle} onClick={updateInfo_yellow}>색상변경(노랑)</button>
            <button style={buttonStyle} onClick={updateInfo_green}>색상변경(초록)</button>
        </>
    );
}

export default CarInfo;