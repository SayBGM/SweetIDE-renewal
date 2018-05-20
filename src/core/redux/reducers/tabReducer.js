import { EDITING_TAB_ADD, EDITING_TAB_REMOVE } from './../actions/types'

const initialState = {
  Tabs: [{
    name: 'demo.sweet',
    code: '#include <stdio.h> int main (void)',
    isSave : false,
    isEdit : false
  },
  {
    name: 'test.sweet',
    code: 'let scoding = "Wakanda forever"',
    isSave : true,
    isEdit : true
  }
  ]
}
export default function tabReducer(state=initialState, action){
  switch(action.type){
    case EDITING_TAB_ADD:
      return {...state,
      Tabs: [...state.Tabs, action.newTabsInfo]
    }
    case EDITING_TAB_REMOVE:
      return SaveCheck(state, action.SelectTabNum)
    default:
      return state;
      
  }
}
function SaveCheck (state, SelectTabNum){
  if(state.Tabs[SelectTabNum].isSave){
    return state.Tabs.splice(SelectTabNum,1)
  }else{
    return state
  }
}