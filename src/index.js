import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

require('./styles/styles.css');

import Routes from './config/routes';
import reducers from './reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Routes />
    </Provider>,
  document.getElementById('app')
);