import React from "react";
import './Article.scss'
import UserInfo from "./UserInfo";
import PostsContainer from "./PostsContainer";

export default (props) => {
    return (
        <div>
            <div className="thumb">
                <img src="http://www.linagro.tn/images/slider/slides/1920x400/spring-1920x400.png" alt=""/>
            </div>
            <UserInfo profile={props.profile} />
            <PostsContainer store={props.store}/>
        </div>
    );
}