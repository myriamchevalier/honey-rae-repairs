import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Repairs } from "./components/Repairs";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Repairs />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
