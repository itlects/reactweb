import { useState, useEffect } from "react";

const Timer2=()=> {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);// <- add empty brackets here

  return <h1>타이머 렌더링: <span style={{color: 'red'}}>{count}</span> 초 (times)!</h1>;
}
              
export default Timer2;

