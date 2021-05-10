import {CREATE_POST, FETCH_POSTS} from "../types";
import {ICreatePostAction, IPost} from "../../types";

export function createPost(post: IPost): ICreatePostAction {
    return {
        type: CREATE_POST,
        payload: post
    } as ICreatePostAction;
}

export function fetchPosts() {
    return async (dispatch: any) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await response.json();

        dispatch({ type: FETCH_POSTS, payload: json})
    }
}