import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import {} from 'redux-devtools-extension'
import reducers from './../reducers';

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
);