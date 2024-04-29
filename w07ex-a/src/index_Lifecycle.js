import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './w07-01-Lifecycle/Header';
import Header2 from './w07-01-Lifecycle/Header2';
import Header3 from './w07-01-Lifecycle/Header3';
import Header4 from './w07-01-Lifecycle/Header4';
import Header5 from './w07-01-Lifecycle/Header5';
import Header6 from './w07-01-Lifecycle/Header6';

import MyForm from './w07-02-InputForm/MyForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Hello React 7주차 공부!! </h1>
    <h2>Lifecycle test:</h2>
    <Header></Header>

    <Header2 favcol="노랑"></Header2>

    <Header3 ></Header3>
    <Header4 favcol="하늘색"></Header4>
    <Header5 ></Header5>
    <Header6 ></Header6>

    <br/>
    <h2>InputForm test:</h2>
    
  </div>

);

