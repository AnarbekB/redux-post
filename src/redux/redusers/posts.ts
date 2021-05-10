import {ICreatePostAction, IPostState} from "../../types";
import {CREATE_POST} from "../types";

const initialState: IPostState = {
    posts: [{id: 3, name: 'Hello'}, {id: 2, name: 'Redux'}],
    fetchedPost: [],
};

export const postReducer = (state: IPostState = initialState, action: ICreatePostAction) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: [...state.posts, action.payload]};
        default:
            return state;
    }
}
