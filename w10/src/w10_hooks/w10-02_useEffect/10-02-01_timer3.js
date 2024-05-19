import { useState, useEffect } from "react";

const Timer3=()=> {
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);

  useEffect(() => {
    setCalc(()=>count*2);
  }, [count]);// <- add the count variable  here

  return (
    <>
      <p>카운트: <span style={{color: 'red'}}>{count}</span> </p>
      <button onClick={()=>setCount((c)=>c+1)}>+</button>

      <p>계산(x2)결과:  {calc}</p>
    </>
  );
}
              
export default Timer3;

