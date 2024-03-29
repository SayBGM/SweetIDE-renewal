import { 
  PERSONAL_PROJECT_LIST_REQUEST, 
  PERSONAL_PROJECT_LIST_SUCCESS, 
  PERSONAL_PROJECT_LIST_FAILURE,
  SELECT_PERSONAL_PROJECT,
  MODIFY_USER_INFO_REQUEST,
  MODIFY_USER_INFO_SUCCESS,
  MODIFY_USER_INFO_FAILURE,
  //SELECT_PERSONAL_PROJECT,
} from '../actions/types';

const initialState = {
  isError: false,
  isLoing: true,
  selectedPersonalProject: null,
  projects: [
    [
     {id: '0', title: 'Sweet Board Demo Project', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
     {id: '1', title: '동그란 LED에 불 켜보기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
     {id: '2', title: '스피커로 방귀소리 내보내기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
     {id: '3', title: 'Sweet Board Demo Project', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
    ],
    [
     {id: '4', title: 'Sweet Board Demo Project', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
     {id: '5', title: '동그란 LED에 불 켜보기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
     {id: '6', title: '스피커로 방귀소리 내보내기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
     {id: '7', title: '스피커로 방귀소리 내보내기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
    ],
    [
      {id: '8', title: '스피커로 방귀소리 내보내기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
      {id: '9', title: '스피커로 방귀소리 내보내기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
      {id: '10', title: '스피커로 방귀소리 내보내기', type: 'pebble', intro: '스윗 보드를 테스트를 위한 데모 프로젝트입니다.', createdDate: '2018-04-07 18:17:20', modifiedDate: '2018-04-21 07:32:48', size: '0.286mb'},
      
    ]
  ],
  willModifyUserInfo: {
    id: '',
    pwd: '',
    email: '',
    nickname: ''
  }
}
export default function DirectoryReducer(state = initialState, action){
  switch(action.type){
    case PERSONAL_PROJECT_LIST_REQUEST: 
      return { ...state,
        isLoing: true
      }

    case PERSONAL_PROJECT_LIST_SUCCESS: 
      return { ...state,
        isLoing: false,
        isError: false,
        projects: action.projectlist
      }
    
    case PERSONAL_PROJECT_LIST_FAILURE:
      return { ...state,
        isLoing: false,
        isError: true
      }
    
    case SELECT_PERSONAL_PROJECT:
      return { ...state,
        selectedPersonalProject: action.id
      }

    case MODIFY_USER_INFO_REQUEST:
      return { ...state, 
        isLoing: true
      }

    case MODIFY_USER_INFO_SUCCESS: 
      return { ...state,
        isLoing: false,
        isError: false
      }
    
    case MODIFY_USER_INFO_FAILURE:
      return { ...state,
        isLoing: false,
        isError: true
      }
    
    case SELECT_PERSONAL_PROJECT:
      return { ...state,
        selectedPersonalProject: action.id
      }

    default:
      return state;
  }
}



