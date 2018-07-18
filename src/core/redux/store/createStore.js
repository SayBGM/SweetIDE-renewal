import { createStore, applyMiddleware } from 'redux';
<<<<<<< HEAD
import {} from 'redux-devtools-extension'
=======
import {} from 'redux-devtools-extension';
>>>>>>> 0e73e0dc7f84de1f40b624ea07aa2c5cd142f4a7
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