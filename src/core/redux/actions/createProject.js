import { 
  CREATE_PROJECT_REQUEST,
  SET_DIGITAL_MOUDULES,
  SET_ANALOG_MOUDULES,
  SELECT_PROJECT_PLATFORM,
  SELECT_PROJECT_PROGRAMMING_MODE,
  SELECT_PROJECT_DIGITAL_MOUDULES,
  SELECT_PROJECT_ANALOG_MOUDULES
} from './types';

export const selectProjectPlatform = platform => {
  return {
    type: SELECT_PROJECT_PLATFORM,
    data: platform
  }
}

export const selectProjectProgrammingMode = programmingMode => {
  return {
    type: SELECT_PROJECT_PROGRAMMING_MODE,
    data: programmingMode
  }
}

export const selectProjectDigitalMoudules = modules => {
  return {
    type: SELECT_PROJECT_DIGITAL_MOUDULES,
    data: modules
  }
}

export const selectProjectAnalogMoudules = modules => {
  return {
    type: SELECT_PROJECT_ANALOG_MOUDULES,
    data: modules
  }
}

export const setDigitalMoudules = modules => {
  return {
    type: SET_DIGITAL_MOUDULES,
    modules
  }
}

export const setAnalogMoudules = modules => {
  return {
    type: SET_ANALOG_MOUDULES,
    modules
  }
}

export const createProjectRequest = _ => {
  return {
    type: CREATE_PROJECT_REQUEST
  }
}