import { DIRECTORY_FILE_ADD, DIRECTORY_FILE_REMOVE, DIRECTORY_FILE_CHANGE } from './types';

export function directoryFileAdd(filename){
  console.log(filename);
  return {
    type: DIRECTORY_FILE_ADD,
    filename: filename
  }
}

export function directoryFileRemove(deleteIndex){
  return {
    type: DIRECTORY_FILE_REMOVE,
    deleteIndex: deleteIndex
  }
}

export function directoryFileChange(selectIndex, filename){
  return {
    type: DIRECTORY_FILE_CHANGE,
    selectIndex: selectIndex,
    filename: filename
  }
}
