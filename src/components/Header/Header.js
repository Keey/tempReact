import React from 'react';
import './header.scss';
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

export default (props) => {
    return (
        <header className={'box'}>
            <a className="logo" href="/">
                <img src="//www.deluxe.com/sites/deluxe.signupserver.com/files/social-green-icon.png" alt=""/>
            </a>

            <div className={'loginBlock'}>
                {props.isAuth
                    ? <div> { props.login } <button onClick={authAPI.logout()} >Log Out </button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    );
};