import {HIDE_ALERT, SHOW_ALERT} from "../constants/alert";
import {IAlertState, IShowAlertAction} from "../../interfaces";

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