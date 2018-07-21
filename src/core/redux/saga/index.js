import { takeEvery } from 'redux-saga/effects';
import { fetchProject } from './fetchDataSaga';
import { modifyUserInfo } from './mypageSaga';

import { 
  PERSONAL_PROJECT_LIST_REQUEST,
  MODIFY_USER_INFO_REQUEST
} from '../actions/types';

export default function* rootSaga(getState) {
  yield [
    yield takeEvery(PERSONAL_PROJECT_LIST_REQUEST, fetchProject),
    yield takeEvery(MODIFY_USER_INFO_REQUEST, modifyUserInfo, getState)
  ];
}