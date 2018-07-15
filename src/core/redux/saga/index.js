import { takeEvery, fork, all } from 'redux-saga/effects';
import { fetchProject } from './fetchDataSaga';
import { modifyUserInfo } from './mypageSaga';

import { 
  PERSONAL_PROJECT_LIST_REQUEST,
  MODIFY_USER_INFO_REQUEST
} from '../actions/actionTypes';

function* fetchData() {
  yield takeEvery(PERSONAL_PROJECT_LIST_REQUEST, fetchProject);
}

function* mypageRequest(getState) {
  yield takeEvery(MODIFY_USER_INFO_REQUEST, modifyUserInfo, getState);
}

export default function* rootSaga(getState) {
  yield all([
    fork(fetchData),
    fork(mypageRequest, getState),
  ]);
}