import React from 'react';
import {NavLink} from 'react-router-dom';
import './aside.scss';

export default (props) => {
    return (
        <aside>
            <div className="navigation_menu">
            <nav>
                <li><NavLink to="/article" activeClassName='-active'>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName='-active'>Message</NavLink></li>
                <li><NavLink to="/users" activeClassName='-active'>Users</NavLink></li>
                <li><a href="">Settings</a></li>
            </nav>
            </div>
        </aside>
    );
}
