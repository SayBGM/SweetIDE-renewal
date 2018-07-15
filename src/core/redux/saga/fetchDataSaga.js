import { getCookie } from '../../utils/cookie';
import { put, call } from 'redux-saga/effects';

import { 
  PERSONAL_PROJECT_LIST_SUCCESS,
  PERSONAL_PROJECT_LIST_FAILURE
} from '../actions/actionTypes';

export function* fetchProject() {
  const response = yield call(request, '/project/list', {
    method: 'GET',
    headers: {
      token: getCookie('token')
    }
  });

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