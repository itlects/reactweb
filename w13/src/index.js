import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import 'bootstrap/dist/css/bootstrap.css'
// import reportWebVitals from './reportWebVitals';
import CarouselSlide_uncontrol from './reactstrap/CarouselSlide_uncontrol';
import ReactstrapCarousel from './reactstrap/ReactstrapCarousel';
import CarouselSlide from './reactstrap/CarouselSlide';
import CarouselSlide2 from './reactstrap/CarouselSlide2';
import CarouselSlide3 from './reactstrap/CarouselSlide3';
import UserList from './axios/UserList';
import ReactBootButton from './reactstrap/ReactBootButton';
import ReactBootModal2 from './reactstrap/ReactBootModal2';
import RenderLineChart from './reactChart/RenderLineChart';
// import { Counter } from './redux/counter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserList/>
    {/* <CarouselSlide/> */}
    {/* <CarouselSlide2/> */}
    {/* <CarouselSlide3/> */}
    <CarouselSlide_uncontrol/> 
    {/* <ReactstrapCarousel/> */}

    {/* <Counter/> */}
    {/* <ReactBootButton/> */}
    <ReactBootModal2/>
    <br/>
    
    <RenderLineChart/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
