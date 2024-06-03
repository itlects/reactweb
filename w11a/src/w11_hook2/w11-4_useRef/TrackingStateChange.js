import { useState, useEffect, useRef } from "react";

export default function TrackingStateChange() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

/*
input필드에 글자를타이핑입력하면 타이핑 현재, 이전 값을 출력
useEffect를 사용해서 입력값 inputvalue에 dependency를 두고 변경될때 렌더링
useRef를 사용해서 렌더링이 발생될때 값을 저장(이전값으로 저장)

*/
