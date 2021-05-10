import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import {connect} from "react-redux";
import {ICreatePostAction, IPost} from "../../types";
import {createPost} from "../../redux/actions/posts";

interface ILoginFormProps {
    createPost(post: IPost): ICreatePostAction;
}

function PostForm(props: ILoginFormProps) {
    const [title, setTitle] = useState('');

    const submitHandler = (event: SyntheticEvent): void => {
        event.preventDefault();

        let newPost: IPost = {id: Number(Date.now().toString()), name: title};
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
                        required={true}
                        onChange={changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Submit</button>
            </div>
        </form>
    );
}

const mapDispatchToProps = {
    createPost
};

export default connect(null, mapDispatchToProps)(PostForm);