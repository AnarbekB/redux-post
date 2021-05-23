import React, {ChangeEvent, ReactElement, SyntheticEvent, useState} from "react";
import {connect} from "react-redux";
import {IAction, IAlert, ICreatePostAction, IPost, IShowAlertAction} from "../../interfaces";
import {createPost} from "../../redux/actions/posts";
import {hideAlert, showAlert} from "../../redux/actions/alert";
import {POST_NAME_IS_REQUIRED} from "../../constants/alerts-code";

interface Props {
    createPost(post: IPost): ICreatePostAction;
    showAlert(alert: IAlert): IShowAlertAction;
    hideAlert(): IAction;
}

function PostForm(props: Props): ReactElement {
    const [title, setTitle] = useState('');

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();

        if (title.trim().length === 0) {
            props.showAlert({id: POST_NAME_IS_REQUIRED, message: "Name post is required"} as IAlert);
            return;
        }

        let newPost: IPost = {id: Number(Date.now().toString()), title: title};
        props.createPost(newPost);
        setTitle('');
    }

    const changeInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        event.persist();
        setTitle(event.currentTarget.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <h4>Create new post</h4>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        name="title"
                        value={title}
                        onChange={changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Submit</button>
            </div>
        </form>
    );
}

const mapDispatchToProps = {
    createPost, showAlert, hideAlert
};

export default connect(null, mapDispatchToProps)(PostForm);