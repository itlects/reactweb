import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';

import Layout from './w08-03-router/Layout';
import Home from './w08-03-router/Home';
import Blog from './w08-03-router/Blog'; 
import Contact from './w08-03-router/Contact';
import NoPage from './w08-03-router/NoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* 
    <MyCar />
    <MyCar2 color="red"/>
    <MyCar3 /> 
     
    <MyList/>
    <MyList2/>
    */}

    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='*' element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
