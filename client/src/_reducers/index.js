import { combineReducers } from 'redux';
import user from './user_reducer';

//여러 Reducer들을 묶어줌
const rootReducer = combineReducers({
    user
})

export default rootReducer;