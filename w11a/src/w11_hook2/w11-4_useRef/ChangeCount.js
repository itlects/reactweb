import { useState, useEffect, useRef } from "react";

function ChangeCount() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    console.log("render: {count}");
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      
    </>
  );
}

export default ChangeCount;
/*
input 상자안에 글을 입력하면 카운트됩니다.
*/