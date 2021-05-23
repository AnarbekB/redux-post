import React, {Dispatch, ReactElement} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../redux/actions/posts";
import {IPost, IRootState} from "../../interfaces";
import {Post} from "../Post";
import {Loader} from "../Loader";

export function AsyncPosts(): ReactElement {
    const dispatch: Dispatch<any> = useDispatch();
    const posts: IPost[] = useSelector((state: IRootState) => {
        return state.posts.fetchedPost
    });
    const loading: boolean = useSelector((state: IRootState) => {
        return state.app.loading;
    });

    if (loading) {
        return <Loader/>
    }

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
