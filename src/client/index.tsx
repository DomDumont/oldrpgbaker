import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {rpgbakerApp} from './reducers/index';
import {App} from './components/App';


let store = createStore(rpgbakerApp);


ReactDOM.render(
  <Provider store={store}>
    <App  compiler="TypeScript" framework="React"/>
  </Provider>,
  document.getElementById('root')
);

