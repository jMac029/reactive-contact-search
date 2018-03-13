import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import data from './resources/contact_data'

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
