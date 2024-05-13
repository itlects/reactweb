import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import MyCar from './w08-01-component/MyCar';
import MyCar2 from './w08-01-component/MyCar2';
import MyCar3_Garage from './w08-01-component/MyCar3';
import MyCar4_Garage from './w08-01-component/MyCar4';
import MyCar5_Garage from './w08-01-component/MyCar5';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './w08-02-router/Layout'; 
import Home from './w08-02-router/Home';
import Blog from './w08-02-router/Blog';
import Contact from './w08-02-router/Contact';
import NoPage from './w08-02-router/NoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* 
    <MyCar />
    <MyCar2 color="skyblue"></MyCar2>
    <MyCar3_Garage></MyCar3_Garage>
    <MyCar4_Garage></MyCar4_Garage>
    <MyCar5_Garage></MyCar5_Garage> 
    */}

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='blog' element={<Blog/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='*' element={<NoPage/>}></Route>

        </Route>

      </Routes>
    </BrowserRouter>
  </>

);

