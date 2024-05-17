import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Todos from './w09-01_memo/w09-01_rererender';

import RedHeader from './w09-02_css/w09-02-01_inline';

import './w09-02_css/w09-02-02_cssfile.css';

import './w09-03_sass/w09-03-01.scss';
import ScssHeader from './w09-03_sass/w09-03-01';

const App=()=>{
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["할일1", "할일2"]);
  const increament = ()=>{
    setCount((c)=>c+1);
  };
  return(
    <>
    <Todos todos = {todos}></Todos> 
    
    <hr/>
    <div>
      count: {count}
      <button onClick={increament}>+</button>


    </div>
  </>

  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App></App>

    <hr/>
    <RedHeader/>

    <p className='yellowFont'>가나다라마바사1234567890</p>
    <p className='greenFont'>가나다라마바사1234567890</p>


    <hr/>
    <h1 className = 'scssNameStyle'>홍길동A반 실습</h1>
    <div className='scssStyle scssBackgroundYellow'>
      <h1>scssStyle을 적용한 h1태그</h1>
      <ScssHeader></ScssHeader>
    </div>
  </>


);

