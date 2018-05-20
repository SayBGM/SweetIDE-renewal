import {combineReducers} from 'redux';
import userReducer from './userReducer'
import projectReducer from './projectReducer'
import directoryReducer from './directoryReducer'
import codeReducer from './codeReducer'
import tabReducer from './tabReducer'

const reducers = combineReducers({
  userReducer,
  projectReducer,
  directoryReducer,
  codeReducer,
  tabReducer
});

export default reducers;