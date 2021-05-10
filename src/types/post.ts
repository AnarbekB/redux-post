export interface IPost {
    id: number,
    name: string
}

export interface IPostState {
    posts: IPost[]
    fetchedPost: IPost[]
}

export interface ICreatePostAction {
    type: string,
    payload: IPost
}