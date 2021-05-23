import {combineReducers} from 'redux';
import {postReducer} from "./posts";
import {appReducer} from "./app";
import {alertReducer} from "./alert";

export const rootReducer = combineReducers({
    posts: postReducer,
    app: appReducer,
    alert: alertReducer
})