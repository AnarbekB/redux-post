import {IAction} from "../../interfaces";
import {HIDE_LOADER, SHOW_LOADER} from "../constants/loader";
import {ILoaderState} from "../../interfaces";

const initialState: ILoaderState = {
    loading: false
};

export const loaderReducer = (state: ILoaderState = initialState, action: IAction) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER:
            return {...state, loading: false};
        default:
            return state;
    }
}