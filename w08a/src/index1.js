import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import MyCar from './w08-01-component/MyCar';
import MyCar2 from './w08-01-component/MyCar2';
import MyCar3_Garage from './w08-01-component/MyCar3';
import MyCar4_Garage from './w08-01-component/MyCar4';
import MyCar5_Garage from './w08-01-component/MyCar5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MyCar />
    <MyCar2 color="skyblue"></MyCar2>
    <MyCar3_Garage></MyCar3_Garage>
    <MyCar4_Garage></MyCar4_Garage>
    <MyCar5_Garage></MyCar5_Garage>
  </>

);

