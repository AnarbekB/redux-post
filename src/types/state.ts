import {IPostState} from "./post";
import {IApplicationState} from "./application";

export interface IRootState {
    posts: IPostState,
    app: IApplicationState
}