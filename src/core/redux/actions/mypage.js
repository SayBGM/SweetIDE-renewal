import { PERSONAL_PROJECT_LIST_REQUEST, MODIFY_USER_INFO_REQUEST } from '../actions/types';

export const selectPersonalProject = projectId => {
  return {
    type: SELECT_PERSONAL_PROJECT,
    id: projectId
  }
}

export const getPersonalProjectList = _ => {
  return {
    type: PERSONAL_PROJECT_LIST_REQUEST
  }
}

export const modifyUserInfo = _ => {
  return {
    type: MODIFY_USER_INFO_REQUEST
  }
}