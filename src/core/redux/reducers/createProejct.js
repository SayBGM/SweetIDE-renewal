import { 
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE,
  SET_DIGITAL_MOUDULES,
  SET_ANALOG_MOUDULES,
  SELECT_PROJECT_PLATFORM,
  SELECT_PROJECT_PROGRAMMING_MODE,
  SELECT_PROJECT_DIGITAL_MOUDULES,
  SELECT_PROJECT_ANALOG_MOUDULES
} from '../actions/types';

const initialState = {
  isError: false,
  isLoing: true,
  platformCategory: ['SweetBoard', 'ArduinoUno'],
  programmingModeCategory: ['Arduino Sketch', 'Pebble'],
  selectedPlatform: 0,
  selectedProgrammingMode: 0,
  digitalModules: [],
  analogModules: [],
  selectedDigitalModules: [],
  selectedAnalogModules: []
}
export default function DirectoryReducer(state = initialState, action){
  switch(action.type){
    case CREATE_PROJECT_REQUEST: 
      return { ...state,
        isLoing: true
      }

    case CREATE_PROJECT_SUCCESS: 
      return { ...state,
        isLoing: false,
        isError: false,
        projects: action.projectlist
      }
    
    case CREATE_PROJECT_FAILURE:
      return { ...state,
        isLoing: false,
        isError: true
      }
    
    case SELECT_PROJECT_PLATFORM:
      return { ...state,
        selectedPlatform: action.data
      }

    case SELECT_PROJECT_PROGRAMMING_MODE:
      return { ...state, 
        selectedProgrammingMode: action.data
      }

    case SELECT_PROJECT_DIGITAL_MOUDULES: 
      return { ...state,
        selectedDigitalModules: action.data
      }
    
    case SELECT_PROJECT_ANALOG_MOUDULES:
      return { ...state,
        selectedAnalogModules: action.data
      }
    
    case SET_DIGITAL_MOUDULES:
      return { ...state,
        digitalModules: action.modules
      }

    case SET_ANALOG_MOUDULES:
      return { ...state,
        analogModules: action.modules
      }

    default:
      return state;
  }
}



