import React from 'react';
import './header.scss';
import {NavLink} from "react-router-dom";

export default (props) => {
    return (
        <header className={'box'}>
            <a className="logo" href="/">
                <img src="//www.deluxe.com/sites/deluxe.signupserver.com/files/social-green-icon.png" alt=""/>
            </a>

            <div className={'loginBlock'}>
                {props.isAuth ?  props.login  : <NavLink to={'/'}>Login</NavLink>}
            </div>

        </header>
    );
};