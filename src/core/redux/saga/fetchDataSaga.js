import { getCookie } from '../../utils/cookie';
import { put, call } from 'redux-saga/effects';

import { 
  PERSONAL_PROJECT_LIST_SUCCESS,
  PERSONAL_PROJECT_LIST_FAILURE,
  FETCH_DIGITAL_MODULES_SUCCESS,
  FETCH_DIGITAL_MODULExwS_FAILURE,
  FETCH_ANALOG_MODULES_SUCCESS,
  FETCH_ANALOG_MODULES_FAILURE
} from '../actions/actionTypes';

export function* fetchProject() {
  const response = yield call('/project/list', {
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

export function* fetchDigitalMoudules() {
  const response = yield call('/project/list');

  if(response.status === 200) {
    yield put({
      type: FETCH_DIGITAL_MODULES_SUCCESS,
      moudules: response.data.moudules
    });
  }

  yield put({
    type: FETCH_DIGITAL_MODULES_FAILURE,
  });
}

export function* fetchAnalogMoudules() {
  const response = yield call('/project/list');

  if(response.status === 200) {
    yield put({
      type: FETCH_ANALOG_MODULES_SUCCESS,
      moudules: response.data.moudules
    });
  }

  yield put({
    type: FETCH_ANALOG_MODULES_FAILURE,
  });
}