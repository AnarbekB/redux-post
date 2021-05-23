import {IPostState} from "./post";
import {IAlertState} from "./alert";
import {ILoaderState} from "./loader";

export interface IRootState {
    posts: IPostState,
    app: ILoaderState,
    alert: IAlertState
}