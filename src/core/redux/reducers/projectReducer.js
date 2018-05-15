import {CHANGE_SWEET_CODE} from './../actions/types';
import codeReducer from './codeReducer';

const initialState = {
    projectType: 'SWEET_CLIKE',
    projectId: '91006',
    projectName: 'HelloWorld',
    lastUploadedTime: 1805091919
    //2018년05월09일19시19분
}

export default function projectReducer(state=initialState, action){
  switch (action.type) {
    default :
        return Object.assign({}, state, {
            code: codeReducer(state.code, action)
        });
}
}