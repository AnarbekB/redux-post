import React from "react";
import {IPost} from "../../types";
import {Post} from "../Post";

interface Props {
    posts: IPost[]
}

export function SyncPosts( props: Props ) {
    if (props.posts.length === 0) {
        return <p className="text-center">Posts not found</p>
    }

    return <>{
        props.posts.map(post => <Post post={post} key={post.id}/>)
    }</>
}
