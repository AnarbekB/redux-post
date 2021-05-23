import {IAction} from "./application";

export interface IPost {
    id: number,
    title: string
}

export interface IPostState {
    posts: IPost[]
    fetchedPost: IPost[]
}

export interface ICreatePostAction extends IAction {
    payload: IPost
}