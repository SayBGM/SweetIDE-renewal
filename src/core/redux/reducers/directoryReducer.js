import {
  DIRECTORY_FILE_ADD,
  DIRECTORY_FILE_REMOVE,
  DIRECTORY_FILE_CHANGE
} from './../actions/types';

const initialState = {
  directory: [{
    filename: "test.sweet",
    code: '#include <stdio.h>\nint main (void)'
  }]
}

export default function DirectoryReducer(state = initialState, action) {
  switch (action.type) {
    case DIRECTORY_FILE_ADD:
      let NewFile = {
        filename: action.filename,
        code: ''
      }
      for(let i = 0; i<state.directory.length; i++){
        if(state.directory[i].filename === NewFile.filename || NewFile.filename === ''){
          return {
            ...state,
          }
        } else if(state.directory[i].filename === NewFile.filename+".sweet"){
          return {
            ...state,
          }
        }
      }
      if (NewFile.filename.indexOf(".") !== -1) {
        return { ...state,
          directory: [...state.directory, NewFile]
        }
      }
      else{
        NewFile.filename = NewFile.filename + ".sweet"
        return { ...state,
          directory: [...state.directory, NewFile]
        }
      }
    case DIRECTORY_FILE_REMOVE:
      return { ...state,
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

function checkFileName(name, directory) {
  for (let i = 0; i < directory.length; i++) {
    if (name === directory[i].filename) {
      return false;
    }
    return true;
  }
}