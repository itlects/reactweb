import { useState } from "react";
import favorStyle  from './FavorColor.module.css';
import './FavorColor.css'
import scss from './FavorColor.scss'

const FavorColor=()=>{
  
  const [color, setColor] = useState('red');
  return (

    <>
      <h1>내가 좋아하는 색은 <span className={color}>{color}</span></h1>
      <div className={favorStyle.buttonStyle}>
        <button className={favorStyle.blue} type="button" onClick={()=>setColor('blue')}>blue</button>
        <button className={favorStyle.red} type="button" onClick={()=>setColor('red')}>red</button>
        <button className={`${scss.scssStyle} ${scss.green}`} type="button" onClick={()=>setColor('green')}>green</button>
        <button className='yellow backgroundButtonStyle' type="button" onClick={()=>setColor('yellow')}>yellow</button>
      </div>
    </>
  );
}

export default FavorColor;