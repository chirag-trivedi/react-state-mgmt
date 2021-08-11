import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//Paths of created folders have been addded 
import App from './containers/app';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

