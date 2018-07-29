import {GET_PORT_LIST, CHANGE_PORT_NUMBER} from './types';

export function getPortList(portlist){
  return {
    type: GET_PORT_LIST,
    portlist: portlist,
  }
}

export function changePortNumber(portName){
  return {
    type: CHANGE_PORT_NUMBER,
    portName: portName
  }
}
