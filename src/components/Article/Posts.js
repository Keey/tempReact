import React from "react";
import './Article.scss'
import UserPost from "./UserPost";

export default (props) => {
  // debugger
    let postsItem = props.posts.map(p => <UserPost description={p.description} like={p.like}/> )

    let newPostElement = React.createRef();

    let addPostbtn = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
         props.updatePostText(text)
    }

    return (
        <div className="posts">
            <h3>My Post</h3>

            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>

            <button onClick={addPostbtn}>Add Post</button>
            <div className={'userComments'}>
                {postsItem}
            </div>
        </div>
    )
}

