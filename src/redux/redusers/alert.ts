import {HIDE_ALERT, SHOW_ALERT} from "../types";
import {IAlertState, IShowAlertAction} from "../../types/alert";

const initialState: IAlertState = {
    postNameEmpty: false,
    postNameEmptyMessage: null
};

export const alertReducer = (state: IAlertState = initialState, action: IShowAlertAction) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, postNameEmpty: true, postNameEmptyMessage: action.message};
        case HIDE_ALERT:
            return {...state, postNameEmpty: null}
        default:
            return state;
    }
}