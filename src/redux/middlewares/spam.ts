import {CREATE_POST} from "../constants/post";
import {IAlert, ICreatePostAction} from "../../interfaces";
import {MiddlewareAPI} from "redux";
import {showAlert} from "../actions/alert";
import {POST_EXIST_SPAM_WORD} from "../../constants/alerts-code";

const forbidden = ['duck', 'cat', 'dog'];

export function detectSpamMiddleware({dispatch}: MiddlewareAPI) {
    return function (next: any) {
        return function (action: ICreatePostAction) {
            if (action.type === CREATE_POST) {
                const found: string[] = forbidden.filter(word => action.payload.title.includes(word))
                console.log(dispatch);
                if (found.length > 0) {
                    const message = 'Title exist forbidden words: (' + found.toString() + ')';
                    return dispatch(showAlert({id: POST_EXIST_SPAM_WORD, message} as IAlert))
                }
            }

            return next(action);
        }
    }
}