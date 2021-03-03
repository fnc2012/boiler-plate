import axios from 'axios';
import {
    LOGIN_USER
} from './types';


export function loginUser(dataTosubmit) {
    const request = axios.post('/api/user/login', dataTosubmit)
    .then(response => response.data)


    //request를 reducer에 넘겨주는 작업
    return {
        type: LOGIN_USER,
        payload: request
    }

}