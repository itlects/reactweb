import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyCar from './w08-01-component/MyCar';
import MyCar2 from './w08-01-component/MyCar2';
import Garage from './w08-01-component/MyCar3';

import MyGarage from './w08-02-list/MyCarList';
import MyGarage2 from './w08-02-list/MyCarList2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MyCar></MyCar>
    <MyCar2 color="white"></MyCar2>
    <Garage></Garage>

    <MyGarage></MyGarage>

    <MyGarage2></MyGarage2>
  </>
);

