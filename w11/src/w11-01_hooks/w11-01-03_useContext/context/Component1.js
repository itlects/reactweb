import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function Component1(){
  const [user, setUser] = useState("홍길동");
  return(
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 use={user}/>

    </UserContext.Provider>
  );
}


function Component2(){
  return(
    <>
      <h1>Component2</h1>
      <Component3 />
    </>

  );
}

function Component3(){
  const user = useContext(UserContext);
  return(
    <>
      <h1>Component3</h1>
      <h2>{`Goodbye! ${user}`}</h2>
    </>

  );
}

