import { useState } from "react";

const CarInfo = ()=>{
    const [brand, setBrand] = useState('현대차');
    const [model, setModel] = useState('산타페');
    const [year, setYear] = useState('2022');
    const [color, setColor] = useState('빵강');
    const buttonStyle={width:'100px', height:'80px', fontSize:'20px'};
    // const resultStyle={
    //     color:'red', 
    //     backgroundColor:'yellow',
    // };
    const changeColorehandler_blue=()=>{
        setColor('파랑');
    };
    const changeColorehandler_red=()=>{
        setColor('빨강');
    };
    const changeColorehandler_yellow=()=>{
        setColor('노랑');
    };
    const changeColorehandler_green=()=>{
        setColor('초록');
    };
    return(
        <>
            <div>
                <h1>내차 정보:  </h1>
                {/* <p>내차의 색상: <span style={resultStyle} className={color}>{color}</span></p> */}
                <p>내차의 제조사: <span className={brand}>{brand}</span></p>
                <p>내차의 차량모델: <span className={model}>{model}</span></p>
                <p>내차의 제조년: <span className={year}>{year}</span></p>
                <p>내차의 색상: <span className={color}>{color}</span></p>
            </div>
            <button style={buttonStyle} onClick={changeColorehandler_blue}>색상변경(파랑)</button>
            <button style={buttonStyle} onClick={changeColorehandler_red}>색상변경(빨강)</button>
            <button style={buttonStyle} onClick={changeColorehandler_yellow}>색상변경(노랑)</button>
            <button style={buttonStyle} onClick={changeColorehandler_green}>색상변경(초록)</button>
        </>
    );
}

export default CarInfo;