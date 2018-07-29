import { getCookie } from '../../utils/cookie';
import { put, call } from 'redux-saga/effects';

import { 
  MODIFY_USER_INFO_SUCCESS,
  MODIFY_USER_INFO_FAILURE
} from '../actions/types';

export function* modifyUserInfo(getState) {
  const response = yield call('/account', {
    method: 'UPDATE',
    headers: {
      token: getCookie('token')
    },
    body: {
      
    }
  });

  if(response.status === 200) {
    yield put({
      type: MODIFY_USER_INFO_SUCCESS,
      country: response.data.projectlist
    });
  }

  yield put({
    type: MODIFY_USER_INFO_FAILURE,
  });
}
