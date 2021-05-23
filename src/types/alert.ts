import {IAction} from "./application";

export interface IAlertState {
    postNameEmpty: boolean
    postNameEmptyMessage: string|null
}

export interface IShowAlertAction extends IAction {
    message: string;
}