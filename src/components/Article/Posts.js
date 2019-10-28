import React from "react";
import './Article.scss'
import UserPost from "./UserPost";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validation/valid";
import {Textarea} from "../common/FormControl/FormControls";


export default (props) => {

    let postsItem = props.posts.map(p => <UserPost description={p.description} like={p.like}/> )

    const addNewMessage = (formData) => {
        props.addPost(formData.addNewMessage);
    }

    return (
        <div className="posts">
            <h3>My Post</h3>

            <PostReduxForm onSubmit={addNewMessage} />

            <div className={'userComments'}>
                {postsItem}
            </div>
        </div>
    )
}


const maxLength = maxLengthCreator(10);

const postForm = (props) => {

    return <form onSubmit={props.handleSubmit}>

           <Field component={Textarea} name="addNewMessage" type="addNewMessage" placeholder="Enter Post" validate={[required,maxLength]}/>
           <button>Add Post</button>
    </form>
}

const PostReduxForm = reduxForm({
    form: 'formPost'
})(postForm)