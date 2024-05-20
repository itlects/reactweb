import React from 'react';
import ReactDOM from 'react-dom/client';
import FavorColor from './w10_01_useState/FavorColor_style';
import CarInfo from './w10_01_useState/CarInfo_update';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FavorColor></FavorColor>
    <hr/>
    <CarInfo></CarInfo>
  </>
);

