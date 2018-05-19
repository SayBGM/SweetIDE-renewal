import axios from 'axios'
import {store} from './../../../redux/store/createStore'

export default class RestApiHandler {

    static postRequest(url, params) {
        return axios.post(url, params)
    }

    static authedPostRequest(url, params) {
        const paramsWithAuthInfo = Object.assign({ }, params, {token: store.authToken.tokenValue});
        this.postRequest(url, paramsWithAuthInfo);
    }

    static getRequest(url, params) {
        axios.get(url, {params: params})
    }

    static authedGetRequest(url, params) {
        const paramsWithAuthInfo = Object.assign({ }, params, {token: store.authToken.tokenValue});
        this.getRequest(url, params)
    }
    
}
