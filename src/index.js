import React from 'react';
import ReactDOM from 'react-dom';

import SeasonsApp from "./SeasonsApp";
ReactDOM.render(
  <React.StrictMode>
    <SeasonsApp/>
  </React.StrictMode>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
