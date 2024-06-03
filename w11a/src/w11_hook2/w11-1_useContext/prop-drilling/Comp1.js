import Comp2 from "./Comp2";
import { useState } from "react";

export default function Comp1(){
  const [user, setUser] = useState("홍길동");
  return(
    <>
      <h1>Comp1</h1>
      <h1>{`Hello ${user}!`}</h1>
      <h1>Hello {user}!</h1>

      <Comp2 user={user}/>
    </>
  );
}