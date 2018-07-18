import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './core/redux/store/createStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Main, SweetIDE, DefaultLayout, Signin, Signup, Verifi, Mypage, CreateProject } from './container/index';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' component={Main} exact/>
        <Route path='/ide' component={SweetIDE} exact/>
        <Route render={() => 
          <DefaultLayout>
            <Switch>
              <Route path="/signin" component={Signin} exact />
              <Route path="/signup" component={Signup} exact />
              <Route path="/mypage" component={Mypage} exact />
              <Route path="/create/project" component={CreateProject} exact />
              <Route path="/verifi" component={Verifi} exact />
            </Switch>
          </DefaultLayout>
        } />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root')
);
