import { takeEvery } from 'redux-saga/effects';
import { fetchProject, fetchDigitalMoudules, fetchAnalogMoudules } from './fetchDataSaga';
import { modifyUserInfo } from './mypageSaga';
import { createProject } from './createProjectSaga';

import { 
  PERSONAL_PROJECT_LIST_REQUEST,
  MODIFY_USER_INFO_REQUEST,
  FETCH_DIGITAL_MODULES_REQUEST,
  FETCH_ANALOG_MODULES_REQUEST,
  CREATE_PROJECT_REQUEST
} from '../actions/types';

export default function* rootSaga(getState) {
  yield [
    yield takeEvery(PERSONAL_PROJECT_LIST_REQUEST, fetchProject),
    yield takeEvery(FETCH_DIGITAL_MODULES_REQUEST, fetchDigitalMoudules),
    yield takeEvery(FETCH_ANALOG_MODULES_REQUEST, fetchAnalogMoudules),
    yield takeEvery(MODIFY_USER_INFO_REQUEST, modifyUserInfo, getState),
    yield takeEvery(CREATE_PROJECT_REQUEST, createProject, getState)
  ];
}