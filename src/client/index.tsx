import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import {rpgbakerApp} from './reducers/index';
import {App} from './components/App';

const initialState = {};


const store: Store<any> = createStore(rpgbakerApp, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);

