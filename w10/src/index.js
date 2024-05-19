import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import FavorColor from './w10_hooks/w10-01_useState/w10-01-01_FavorColor/FavorColor';
import Carinfo2 from './w10_hooks/w10-01_useState/w10-01-02_CarInfo/CarInfo2';
import Carinfo3 from './w10_hooks/w10-01_useState/w10-01-02_CarInfo/CarInfo3';
import Timer from './w10_hooks/w10-02_useEffect/10-02-01_timer';
import Timer2 from './w10_hooks/w10-02_useEffect/10-02-01_timer2';
import Timer3 from './w10_hooks/w10-02_useEffect/10-02-01_timer3';


import UseEffectCleanup from './w10_hooks/w10-02_useEffect/10-02-02_cleanup';

import './index.css'
import Login from './w10_hooks/w10-02_useEffect/10-02-03_logoin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <FavorColor />
      <hr/>
      <Carinfo2 />
      <hr/>
      <Carinfo3 />

      <hr/>
      <Timer />
      <hr/>
      <Timer2 />
      <hr/>
      <Timer3 />


{/* useEffect */}
      <hr/>
      <UseEffectCleanup />
      <hr/>
      <Login />

    </>
  </React.StrictMode>
);

reportWebVitals();
