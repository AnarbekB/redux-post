import {IAction, IApplicationState} from "../../types/application";
import {HIDE_LOADER, SHOW_LOADER} from "../types";

const initialState: IApplicationState = {
    loading: false
};

export const appReducer = (state: IApplicationState = initialState, action: IAction) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER:
            return {...state, loading: false};
        default:
            return state;
    }
}