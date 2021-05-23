import {combineReducers} from 'redux';
import {postReducer} from "./posts";
import {loaderReducer} from "./loader";
import {alertReducer} from "./alert";

export const rootReducer = combineReducers({
    posts: postReducer,
    app: loaderReducer,
    alert: alertReducer
})