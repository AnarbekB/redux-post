import {CREATE_POST, FETCH_POSTS} from "../constants/post";
import {IAction, ICreatePostAction, IPost} from "../../interfaces";
import {hideLoader, showLoader} from "./loader";
import {Dispatch} from "react";

export function createPost(post: IPost): ICreatePostAction {
    return {
        type: CREATE_POST,
        payload: post
    } as ICreatePostAction;
}

export function fetchPosts() {
    return async (dispatch: Dispatch<ICreatePostAction|IAction>) => {
        dispatch(showLoader());

        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await response.json();

        dispatch({ type: FETCH_POSTS, payload: json})

        dispatch(hideLoader());
    }
}