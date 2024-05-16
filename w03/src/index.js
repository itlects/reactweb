import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { useState } from 'react';
import Todos from './w09-01-reredering/Todos';
// import Todos from './w09-02-memo/Todos2';
import RedHeader from './w09-03-css/w09-03-01_inline';
import BlueHeader from './w09-03-css/w09-03-02_inline_camel';
import StyleHeader from './w09-03-css/w09-03-03_inline_object';
import CssfileHeader from './w09-03-css/w09-03-04_cssfile';
import './w09-03-css/w09-03-04_cssfile.css';

import Car from './w09-03-css/w09-03-05_cssfile_module';

import './w09-04-sass/w09-04-01.scss';
import ScssHeader from './w09-04-sass/w09-04-01';

const App = () =>{
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  
  const increment =()=>{
    setCount(
      (c)=>c+1
    );
  };

  return(
    <>
      <Todos todos = {todos}></Todos>
      <hr/>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <i>ex1~2</i>:
      <App />

      <br/>
      <hr/>
      <i>ex3</i>:
      <RedHeader></RedHeader>
      <BlueHeader></BlueHeader>
      <div className='yelloFont'>
      <StyleHeader></StyleHeader>
      </div>
      <CssfileHeader></CssfileHeader>
      <hr/>
      <Car></Car>

      <hr/>
      <div className='sassStyle'>
        <h1>scssStyle을 적용한 h1태그</h1>
        <ScssHeader></ScssHeader>
      
      </div>
    </>
);

reportWebVitals();
