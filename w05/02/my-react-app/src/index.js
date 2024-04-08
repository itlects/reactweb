import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
