import React from 'react';
import ReactDOM from 'react-dom';
import SweetMain from './sweetide/IDE';
import { Provider } from 'react-redux';

import {store} from './core/redux/store/createStore'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <SweetMain/>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
