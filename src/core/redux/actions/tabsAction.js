import { EDITING_TAB_ADD, CHANGE_SWEET_CODE, EDITING_TAB_REMOVE } from './types'

export function EditingTabAdd(newTabsInfo){
  /*
    Tab을 만들때 필요한 정보를 TabInfo에 넣습니다.
  */
  return {
    type: EDITING_TAB_ADD,
    newTabsInfo : newTabsInfo
  }
}

export function changeSweetCode(SelectTab,changedCode){
  return {
    type : CHANGE_SWEET_CODE,
    SelectTab : SelectTab,
    changedCode : changedCode
  }
}