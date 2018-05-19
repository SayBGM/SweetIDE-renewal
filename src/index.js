import React from 'react';
import ReactDOM from 'react-dom';
import SweetIDE from './container/SweetIDE/SweetIDE';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store } from './core/redux/store/createStore';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/ide' component={SweetIDE} exact/>
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root')
);
