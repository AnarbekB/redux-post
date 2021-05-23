import React, {ReactElement} from "react";
import {IPost} from "../../interfaces";

interface Props {
    post: IPost
}

export function Post(props : Props): ReactElement {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">#{props.post.id}</h5>
                <p className="card-text">{props.post.title}</p>
            </div>
        </div>
    );
}
