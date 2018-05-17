import {INIT_SWEET_CODE, CHANGE_SWEET_CODE} from './types'

export function initSweetCode(code='asfasfasfa') {
    return {
        type: INIT_SWEET_CODE,
        code: code
    }
}

export function changeSweetCode(changedCode) {
    return {
        type: CHANGE_SWEET_CODE,
        changedCode: changedCode
    }
}