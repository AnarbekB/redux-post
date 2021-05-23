import {HIDE_LOADER, SHOW_LOADER} from "../constants/loader";
import {IAction} from "../../interfaces";

export function showLoader(): IAction {
    return {
        type: SHOW_LOADER,
    } as IAction;
}

export function hideLoader(): IAction {
    return {
        type: HIDE_LOADER,
    } as IAction;
}