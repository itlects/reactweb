import Comp3 from "./Comp3";

export default function Comp2({user}){
  return(
    <>
      <h1>Comp2</h1>

      <Comp3 user={user}/>
    </>
  );
}