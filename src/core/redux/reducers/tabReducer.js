import { EDITING_TAB_ADD, EDITING_TAB_REMOVE, EDITING_TAB_CHANGE, CHANGE_SWEET_CODE } from './../actions/types';

const initialState = {
  isOpen: 0,
  Tabs: [{
    name: 'demo.sweet',
    initialcode: '#include <stdio.h>\nint main (void){\n\tint i = 0;\n}',
    code: '#include <stdio.h>\nint main (void){\tint i = 0;\n}',
    isSave : false

  },
  {
    name: 'test.sweet',
    initialcode: 'let scoding = "Wakanda forever"',
    code: 'let scoding = "Wakanda forever"',
    isSave : true
  },
  {
    name: 'whatthe.sweet',
    initialcode: 'let 우헤헿헤 = "Wakanda forever"',
    code: 'let 우헤헿헤 = "Wakanda forever"',
    isSave : true
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
        return{
          ...state,
          Tabs: state.Tabs.filter((Tab, index) => index !== action.SelectTab)
        }
    case EDITING_TAB_CHANGE:
        return {...state,
          isOpen : action.SelectTab
        }
      
    case CHANGE_SWEET_CODE:
      return {
        ...state,
        Tabs : state.Tabs.map((Tab, index) => index === action.SelectTab ? {...Tab, code : action.changedCode} : Tab)
      }
    default:
      return state;
      
  }
}