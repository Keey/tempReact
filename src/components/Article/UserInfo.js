import React from "react";
import './Article.scss'
import Preloader from "../Preloader/Preloader";

export default (props) => {


    if (!props.profile){
        return <Preloader />
    }
    return (
        <div className="userInfo">
            <div className="box">
                <figure>
                    <img src={props.profile.photos.large} alt=""/>
                </figure>
                <div>
                    <h2>{props.profile.fullName.toUpperCase()}</h2>
                    <ul>
                        <li>About Me: <strong>{props.profile.aboutMe}</strong></li>
                        <li>Contacts: <strong>{props.profile.contacts.facebook}</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}