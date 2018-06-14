import { DIRECTORY_FILE_ADD, DIRECTORY_FILE_REMOVE, DIRECTORY_FILE_CHANGE } from './../actions/types';

const initialState = {
  directory:[{
      filename:"test.sweet",
      code: '#include <stdio.h>\nint main (void)'
    }
  ]
}

export default function DirectoryReducer(state=initialState, action){
  switch(action.type){
    case DIRECTORY_FILE_ADD:
      let NewFile = {
        filename: action.filename,
        code: ''
      }
      return {...state,
        directory:[...state.directory, NewFile]
      }
    case DIRECTORY_FILE_REMOVE:
      return {...state,
        directory: state.directory.filter((file, index) => index !== action.deleteIndex)
      }
    case DIRECTORY_FILE_CHANGE:
      return {
        ...state,
        directory: {
          [action.selectIndex]: {
            filename: action.filename
          }
        }
      }
    default:
      return state;
  }
}
