import {HIDE_ALERT, SHOW_ALERT} from "../constants/alert";
import {IAlertState, IHideAlertAction, IShowAlertAction} from "../../interfaces";

const initialState: IAlertState = {
    alerts: []
};

type IActionType = IShowAlertAction|IHideAlertAction;

export const alertReducer = (state: IAlertState = initialState, action: IActionType) => {
    switch (action.type) {
        case SHOW_ALERT:
            let index = state.alerts.findIndex(value => value.id === action.alert.id);
            if (index === -1) {
                return {...state, alerts: [...state.alerts, action.alert]};
            }
            return state;
        case HIDE_ALERT:
            let indexDelete = state.alerts.findIndex(value => value.id === action.alert.id);
            if (indexDelete === -1) {
                return state;
            }
            state.alerts.splice(indexDelete, 1);
            return {...state, alerts: [...state.alerts]}
        default:
            return state;
    }
}