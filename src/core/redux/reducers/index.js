import {combineReducers} from 'redux';
import userReducer from './userReducer';
import projectReducer from './projectReducer';
import directoryReducer from './directoryReducer';
import tabReducer from './tabReducer';
import mypage from './mypage';
import createProject from './createProject';

const reducers = combineReducers({
  userReducer,
  projectReducer,
  directoryReducer,
  tabReducer,
  mypage,
  createProject,
});

export default reducers;