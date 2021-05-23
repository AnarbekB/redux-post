import {HIDE_ALERT, SHOW_ALERT} from "../constants/alert";
import {IAlertState, IShowAlertAction} from "../../interfaces";

const initialState: IAlertState = {
    alerts: []
};

export const alertReducer = (state: IAlertState = initialState, action: IShowAlertAction) => {
    switch (action.type) {
        case SHOW_ALERT:
            let index = state.alerts.findIndex(value => value.id === action.alert.id);

            if (index === -1) {
                return {...state, alerts: [...state.alerts, action.alert]};
            }
            return state;
        case HIDE_ALERT:
            return {...state, postNameEmpty: null}
        default:
            return state;
    }
}