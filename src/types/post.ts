export interface IPost {
    id: number,
    title: string
}

export interface IPostState {
    posts: IPost[]
    fetchedPost: IPost[]
}

export interface ICreatePostAction {
    type: string,
    payload: IPost
}