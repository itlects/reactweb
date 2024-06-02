import React from 'react';
import ReactDOM from 'react-dom/client';

import AppAccessJson from './json-data/w11-01_json/AppAccessJson';
import Component1 from './w11-01_hooks/w11-01-03_useContext/propdrilling/Component1';
import Component1Context from './w11-01_hooks/w11-01-03_useContext/context/Component1';
import ChangeCount from './w11-01_hooks/w11-01-04_useRef/ChangeCount';
import FocusRef from './w11-01_hooks/w11-01-04_useRef/FocusRef';
import TrackingStateChange from './w11-01_hooks/w11-01-04_useRef/TrackingStateChange';
import TodoCheckReducer from './w11-01_hooks/w11-01-05_useReducer/TodoCheckReducer';
import TodoApp1 from './w11-01_hooks/w11-01-06_useCallback/TodoApp1';
import TodoApp2 from './w11-01_hooks/w11-01-06_useCallback/TodoApp2';
import ExpensiveCalculationApp from './w11-01_hooks/w11-01-07_useMemo/ExpensiveCalculationApp';
import Home from './w11-01-98_custom/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <AppAccessJson/>

    <Component1/>
    <Component1Context />

    <ChangeCount />

    <FocusRef/><br/><br/>

    <TrackingStateChange/>

    <TodoCheckReducer/>

    <TodoApp2/> 

    <ExpensiveCalculationApp/>
    */}
    <Home />

    <br/><br/>
  </>
);

