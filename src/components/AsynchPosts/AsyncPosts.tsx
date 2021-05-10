import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/actions/posts";
import {IRootState} from "../../types/state";
import {Post} from "../Post";

export function AsyncPosts() {
    const dispatch = useDispatch();
    const posts = useSelector((state: IRootState) => {
        return state.posts.fetchedPost
    });

    if (posts.length === 0) {
        return (
            <div>
                <p>Posts not found</p>
                <button type="button" className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>Load</button>
            </div>
        );
    }

    return <>{
        posts.map(post => <Post post={post} key={post.id}/>)
    }</>;
}
