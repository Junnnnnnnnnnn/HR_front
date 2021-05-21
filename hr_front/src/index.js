import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  $(".root")[0]
);