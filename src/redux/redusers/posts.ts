import {ICreatePostAction, IPostState} from "../../interfaces";
import {CREATE_POST, FETCH_POSTS} from "../constants/post";

const initialState: IPostState = {
    posts: [{id: 3, title: 'Hello'}, {id: 2, title: 'Redux'}],
    fetchedPost: [],
};

export const postReducer = (state: IPostState = initialState, action: ICreatePostAction) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: [...state.posts, action.payload]};
        case FETCH_POSTS:
            return {...state, fetchedPost: action.payload}
        default:
            return state;
    }
}
