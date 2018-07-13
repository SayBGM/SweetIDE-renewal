import { put, takeEvery, call } from 'redux-saga/effects';
import { PERSONAL_PROJECT_LIST_SUCCESS, PERSONAL_PROJECT_LIST_FAILURE} from '../actions/actionTypes';

function* fetchProject() {
  const response = yield call("/project/list");

  if(response.status === 200) {
    yield put({
      type: PERSONAL_PROJECT_LIST_SUCCESS,
      country: response.data.projectlist
    });
  }

  yield put({
    type: PERSONAL_PROJECT_LIST_FAILURE,
  });
 
}

export default function* rootSaga() {
  yield takeEvery(PERSONAL_PROJECT_LIST_REQUEST, fetchProject);
}