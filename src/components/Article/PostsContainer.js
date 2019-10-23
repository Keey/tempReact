import React from "react";
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../redux/articleReduce";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        posts: state.article.postData,
        newPostText: state.article.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updatePostText:(text) =>{
            dispatch(updateNewPostTextActionCreator(text))
            },
        addPost:() =>{
            dispatch(addPostActionCreator());
        }
    }
}

let PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;





