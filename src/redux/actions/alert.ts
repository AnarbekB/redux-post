import {IAction} from "../../types/application";
import {HIDE_ALERT, SHOW_ALERT} from "../types";
import {IShowAlertAction} from "../../types/alert";

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