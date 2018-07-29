import { DIRECTORY_FILE_ADD, DIRECTORY_FILE_REMOVE, DIRECTORY_CODE_CHANGE } from './types';

export function directoryFileAdd(filename){
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

export function directoryCodeChange(filename, code){
  return {
    type: DIRECTORY_CODE_CHANGE,
    filename: filename,
    code: code
  }
}
