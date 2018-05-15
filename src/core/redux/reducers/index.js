import {combineReducers} from 'redux';
import userReducer from './userReducer'
import projectReducer from './projectReducer'
import codeReducer from './codeReducer'
import tabReducer from './tabReducer'

const reducers = combineReducers({
  userInfo:userReducer,
  projectInfo:projectReducer,
  codeInfo:codeReducer,
  tabInfo:tabReducer
});

export default reducers;