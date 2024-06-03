import { createContext, useContext, useState } from "react";

const myContext = createContext();
export default function Comp1Context(){

  const [user, setUser] = useState("홍길동2");
  return(
    <myContext.Provider value={user}>
      <h1>Comp1</h1>
      <h1>{`Hello ${user}!`}</h1>
      <h1>Hello {user}!</h1>

      <Comp2/>
    </myContext.Provider>
  );
}


function Comp2(){
  return (
  <>
    <h1>Comp2</h1>
    <Comp3/>
  </>

  );
}

function Comp3(){
  const user = useContext(myContext);
  return (
  <>
    <h1>Comp3</h1>
    <h2>Goodbye! {user}</h2>
  </>

  );
}
