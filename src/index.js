import React from 'react';
import ReactDOM from 'react-dom';
import SweetIDE from './container/SweetIDE/SweetIDE';
import { Provider } from 'react-redux';

import {store} from './core/redux/store/createStore'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <SweetIDE/>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
