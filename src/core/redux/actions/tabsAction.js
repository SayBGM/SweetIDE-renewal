import { EDITING_TAB_ADD, EDITING_TAB_CHANGE, CHANGE_SWEET_CODE, EDITING_TAB_REMOVE } from './types'

export function EditingTabAdd(newTabsInfo){
  /*
    Tab을 만들때 필요한 정보를 TabInfo에 넣습니다.
  */
  return {
    type: EDITING_TAB_ADD,
    newTabsInfo : newTabsInfo
  }
}

export function EditingTabRemove(SelectTab){
  return {
    type: EDITING_TAB_REMOVE,
    SelectTab: SelectTab
  }
}

export function EditingTabChange(SelectTab){
  return {
    type: EDITING_TAB_CHANGE,
    SelectTab : SelectTab
  }
}

export function changeSweetCode(SelectTab,changedCode){
  return {
    type : CHANGE_SWEET_CODE,
    SelectTab : SelectTab,
    changedCode : changedCode
  }
}