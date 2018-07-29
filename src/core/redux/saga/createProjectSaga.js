import { getCookie } from '../../utils/cookie';
import { put, call } from 'redux-saga/effects';

import { 
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE
} from '../actions/types';

export function* createProject(getState) {
  const response = yield call('/account', {
    method: 'UPDATE',
    headers: {
      token: getCookie('token')
    },
    body: {
      
    }
  });

  if(response.status === 201) {
    yield put({
      type: CREATE_PROJECT_SUCCESS
    });
  }

  yield put({
    type: CREATE_PROJECT_FAILURE
  });
}
