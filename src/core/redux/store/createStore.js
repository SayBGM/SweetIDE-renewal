import { createStore, applyMiddleware } from 'redux';
import {} from 'redux-devtools-extension';
import reducers from './../reducers';
import rootSaga from '../saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga, store.getState);