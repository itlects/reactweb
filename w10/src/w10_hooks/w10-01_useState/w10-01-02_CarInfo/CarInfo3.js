import { useState } from "react";
import favorStyle  from './FavorColor.module.css';

const Carinfo = ()=>{
  const [car, setCar] = useState({
    brand: "현대차",
    model: '카니발',
    year: '2023',
    color: 'red'
  });
  const updateColor =()=>{
    setCar(prevState=>{
      return {
        ...prevState, color:'blue'
      }
    });
  }
  return (
    <>
      <h1>내차 정보:  {car.brand}</h1>
      <p>
        차량모델: {car.model} 색상: {car.color} 제조년: {car.year}
      </p>
      <div className={favorStyle.buttonStyle}>
        <button className={favorStyle.blue} type="button" onClick={updateColor}>blue선택</button>
        
      </div>
    </>
  );
} 

export default Carinfo;