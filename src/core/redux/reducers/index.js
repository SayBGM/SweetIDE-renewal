import {combineReducers} from 'redux';
import userReducer from './userReducer'
import projectReducer from './projectReducer'
import codeReducer from './codeReducer'
import tabReducer from './tabReducer'

const reducers = combineReducers({
  userReducer,
  projectReducer,
  codeReducer,
  tabReducer
});

export default reducers;