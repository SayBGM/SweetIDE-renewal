import { EDITING_TAB_ADD, EDITING_TAB_CHANGE, EDITING_TAB_REMOVE } from './types'

export function EditingTabAdd(newTabsInfo){
  /*
    Tab을 만들때 필요한 정보를 TabInfo에 넣습니다.
  */
  return {
    type: EDITING_TAB_ADD,
    newTabsInfo : newTabsInfo
  }
}

export function EditingTabRemove(SelectTabNum){
  return {
    type : EDITING_TAB_REMOVE,
    SelectTabNum : SelectTabNum
  }
}

export function EditingTabChange(SelectTabName){
  return{
    type : EDITING_TAB_CHANGE,
    SelectTabName : SelectTabName
  }
}
