import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import 'bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';
import CarouselSlide_uncontrol from './reactstrap/CarouselSlide_uncontrol';
import ReactstrapCarousel from './reactstrap/ReactstrapCarousel';
// import CarouselSlide from './reactstrap/CarouselSlide';
// import CarouselSlide2 from './reactstrap/CarouselSlide2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <CarouselSlide/> */}
    {/* <CarouselSlide2/> */}
    {/* <CarouselSlide_uncontrol/> */}
    <ReactstrapCarousel/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
