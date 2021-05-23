import {IPostState} from "./post";
import {IApplicationState} from "./application";
import {IAlertState} from "./alert";

export interface IRootState {
    posts: IPostState,
    app: IApplicationState,
    alert: IAlertState
}