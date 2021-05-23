import {combineReducers} from 'redux';
import {postReducer} from "./posts";
import {appReducer} from "./app";

export const rootReducer = combineReducers({
    posts: postReducer,
    app: appReducer
})