import {IAction} from "../../interfaces";
import {HIDE_ALERT, SHOW_ALERT} from "../constants/alert";
import {IShowAlertAction} from "../../interfaces";

export function showAlert(message: string): IShowAlertAction {
    return {
        type: SHOW_ALERT,
        message: message
    } as IShowAlertAction;
}

export function hideAlert(): IAction {
    return {
        type: HIDE_ALERT
    } as IAction;
}