import { useRef } from "react";

export default function FocusRef() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}


/*
button클릭하면 input 필드에 focus가 주어진다.
*/
