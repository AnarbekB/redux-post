import {CREATE_POST} from "../types";
import {ICreatePostAction, IPost} from "../../types";

export function createPost(post: IPost): ICreatePostAction {
    return {
        type: CREATE_POST,
        payload: post
    } as ICreatePostAction;
}
