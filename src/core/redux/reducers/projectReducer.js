import { CHANGE_PORT_NUMBER, GET_PORT_LIST } from "../actions/types";


const initialState = {
    projectType: 'SWEET_CLIKE',
    projectId: '91006',
    projectName: 'HelloWorld',
    lastUploadedTime: 1805091919,
    portlist: [],
    port: '',
}

export default function projectReducer(state=initialState, action){
  switch (action.type) {
    case GET_PORT_LIST:
      state.portlist= [];
      return {
        ...state,
        portlist: action.portlist,
      }
    case CHANGE_PORT_NUMBER:
      return {
        ...state,
        port: action.portName
      }
    default :
        return state;
  }
}