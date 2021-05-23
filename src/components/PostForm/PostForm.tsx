import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import {connect} from "react-redux";
import {ICreatePostAction, IPost} from "../../types";
import {createPost} from "../../redux/actions/posts";
import {showAlert, hideAlert} from "../../redux/actions/alert";
import {Alert} from "../Alert";
import {IRootState} from "../../types/state";
import {IShowAlertAction} from "../../types/alert";
import {IAction} from "../../types/application";

interface Props {
    createPost(post: IPost): ICreatePostAction;
    showAlert(message: string): IShowAlertAction;
    hideAlert(): IAction;
    postNameEmpty: boolean
    postNameEmptyMessage: string|null
}

function PostForm(props: Props) {
    const [title, setTitle] = useState('');

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();

        if (title.trim().length === 0) {
            return props.showAlert("Name post is required");
        }

        let newPost: IPost = {id: Number(Date.now().toString()), title: title};
        props.createPost(newPost);
        setTitle('');

        if (props.postNameEmpty) {
            return props.hideAlert();
        }
    }

    const changeInputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        event.persist();
        setTitle(event.currentTarget.value);
    }

    return (
        <form onSubmit={submitHandler}>

            {props.postNameEmpty && <Alert message={props.postNameEmptyMessage}/>}

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

const mapStateToProps = (state: IRootState) => {
    return {
        postNameEmpty: state.alert.postNameEmpty,
        postNameEmptyMessage: state.alert.postNameEmptyMessage
    } as Props;
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);