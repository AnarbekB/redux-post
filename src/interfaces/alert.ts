import {IAction} from "./application";

export interface IAlertState {
    alerts: IAlert[]
}

export interface IShowAlertAction extends IAction {
    alert: IAlert
}

export interface IHideAlertAction extends IAction {
    alert: IAlert
}

export interface IAlert {
    id: number;
    message: string;
}