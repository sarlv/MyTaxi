import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store';
import App from './containers/app';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/styles.scss';

render(
  <Provider store={ configureStore() }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
