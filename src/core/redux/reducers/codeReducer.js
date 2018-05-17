import {CHANGE_SWEET_CODE} from '../actions/types'

const initialState = '';

export default function codeReducer(state=initialState, action) {
    switch (action.type) {
        case CHANGE_SWEET_CODE :
            return action.changedCode;

        default :
            return state
    }
}
