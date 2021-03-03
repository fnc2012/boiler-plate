import {
    LOGIN_USER
} from '../_actions/types';

//Action을 Reducer에 보냄.  (이전상태, 액션)이 필요
//switch문으로 들어오는 request의 type에 따라 다른 리턴 값을 가짐
export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;
    
        default:
            return state;
    }


}