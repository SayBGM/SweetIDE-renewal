import { EDITING_TAB_ADD, EDITING_TAB_REMOVE,EDITING_TAB_CHANGE } from './../actions/types'

const initialState = {
  Tabs: [{
    name: 'demo.sweet',
    code: '#include <stdio.h>\n int main (void)',
    isSave : false,
    isEdit : false
  },
  {
    name: 'test.sweet',
    code: '#include <stdio.h>\n\tint main (void){\n\tString scoding = "Wakanda forever"\n}',
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

    case EDITING_TAB_CHANGE:
      state.Tabs.map((Tab) => {
        if(Tab.name === action.SelectTabName){
          Tab.isEdit = true
        }
        else{
          return Tab.isEdit = false
        }
      })
      return;
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