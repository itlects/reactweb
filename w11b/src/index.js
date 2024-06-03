import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Component1 from './w11_hooks/w11-3_useContext/propdrilling/Component1';
import Component1Context from './w11_hooks/w11-3_useContext/context/Component1';
import ChangeCount from './w11_hooks/w11-4_useRef/ChangeCount';
import FocusRef from './w11_hooks/w11-4_useRef/FocusRef';
import TrackStateChange from './w11_hooks/w11-4_useRef/TrackStateChange';
import TodoCheckReducer from './w11_hooks/w11-5_useReducer/TodoCheckReducer';
import TodoApp2 from './w11_hooks/w11-6_useCallback/TodoApp2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Hello My 11주 공부</h1>

    {/* <Component1/>

    <Component1Context/> 


    <ChangeCount/>

    <FocusRef/> <br/><br/>
    <TrackStateChange/>

    <TodoCheckReducer/>*/}
    <TodoApp2/>

  </>
);

