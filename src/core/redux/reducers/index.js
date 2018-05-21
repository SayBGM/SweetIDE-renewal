import {combineReducers} from 'redux';
import userReducer from './userReducer'
import projectReducer from './projectReducer'
import directoryReducer from './directoryReducer'
import tabReducer from './tabReducer'

const reducers = combineReducers({
  userReducer,
  projectReducer,
  directoryReducer,
  tabReducer
});

export default reducers;