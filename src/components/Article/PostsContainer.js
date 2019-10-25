import React from "react";
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../redux/articleReduce";
import Posts from "./Posts";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";




let mapStateToProps = (state) =>{
    return{
        posts: state.article.postData,
    }
}


let mapDispatchToProps = (dispatch) => {
    return{
        addPost:(addNewMessage) =>{
            dispatch(addPostActionCreator(addNewMessage));
        }
    }
}



let PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;





