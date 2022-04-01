import React from 'react';
import ReactDOM from 'react-dom';

import NavbarComponent from './navbar';
import MyRoutes from './routes';


ReactDOM.render(
  <React.StrictMode>
    <NavbarComponent />  
    <MyRoutes /> 
  </React.StrictMode>,
  document.getElementById('root')
);