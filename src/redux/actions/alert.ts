import {IAlert, IHideAlertAction, IShowAlertAction} from "../../interfaces";
import {HIDE_ALERT, SHOW_ALERT} from "../constants/alert";

export function showAlert(alert: IAlert): IShowAlertAction {
    return {
        type: SHOW_ALERT,
        alert: alert
    } as IShowAlertAction;
}

export function hideAlert(alertId: number): IHideAlertAction {
    return {
        type: HIDE_ALERT,
        alert: {id: alertId} as IAlert
    } as IHideAlertAction;
}