import {IAction, IAlert} from "../../interfaces";
import {HIDE_ALERT, SHOW_ALERT} from "../constants/alert";
import {IShowAlertAction} from "../../interfaces";

export function showAlert(alert: IAlert): IShowAlertAction {
    return {
        type: SHOW_ALERT,
        alert: alert
    } as IShowAlertAction;
}

export function hideAlert(): IAction {
    return {
        type: HIDE_ALERT
    } as IAction;
}