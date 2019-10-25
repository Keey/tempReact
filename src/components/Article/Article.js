import React from "react";
import './Article.scss'
import UserInfo from "./UserInfo";
import PostsContainer from "./PostsContainer";
import {updateStatus} from "../../redux/articleReduce";

export default (props) => {
    return (
        <div>
            <div className="thumb">
                <img src="http://www.linagro.tn/images/slider/slides/1920x400/spring-1920x400.png" alt=""/>
            </div>
            <UserInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer store={props.store}/>
        </div>
    );
}