import React from "react";
import {connect} from "react-redux";
import {IPost} from "../../interfaces";
import {Post} from "../Post";
import {IRootState} from "../../interfaces";

interface Props {
    posts: IPost[]
}

function SyncPosts(props: Props) {
    if (props.posts.length === 0) {
        return <p className="text-center">Posts not found</p>
    }

    return <>{
        props.posts.map(post => <Post post={post} key={post.id}/>)
    }</>;
}

const mapStateToProps = (state: IRootState) => {
    return {
        posts: state.posts.posts
    } as Props;
}

export default connect(mapStateToProps)(SyncPosts)