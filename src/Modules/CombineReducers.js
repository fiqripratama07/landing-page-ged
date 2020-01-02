import {combineReducers} from 'redux';
import LoginReducer from "./signin/reducer/reducer/LoginReducer";
import UserReducer from "./register/reducer/UserReducer";


export default combineReducers({
    login: LoginReducer,
    register: UserReducer
})
