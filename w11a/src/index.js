import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Comp1Context from './w11_hook2/w11-1_useContext/context/Comp1';
import ChangeCount from './w11_hook2/w11-4_useRef/ChangeCount';
import FocusRef from './w11_hook2/w11-4_useRef/FocusRef';
import TrackingStateChange from './w11_hook2/w11-4_useRef/TrackingStateChange';
import TodoCheckReducer from './w11_hook2/w11-5_useReducer/TodoCheckReducer';
import TodoApp1 from './w11_hook2/w11-6_useCallback/TodoApp1';
import TodoApp2 from './w11_hook2/w11-6_useCallback/TodoApp2';
import HomeApp from './w11_hook2/w11-7_customHook/HomeApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <div className='content-area'>
   <h1>w11a hook 학습합니다!!</h1>

   {/* <Comp1Context/> */}
   {/* <ChangeCount/> */}
   {/* <FocusRef/> */}
   {/* <TrackingStateChange/> */}
   {/* <TodoCheckReducer/> */}
   {/* <TodoApp1/> */}
   {/* <TodoApp2/> */}
   <HomeApp/>
  </div>



</>
);


