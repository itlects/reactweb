import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

import Header from './w07-01-lifecycle/Header4';
import LifecycleEx5 from './w07-01-lifecycle/LifecycleEx5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header favcol="yellow"></Header>
    <LifecycleEx5></LifecycleEx5>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
