import React, {Component} from 'react';
import './header.scss';
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../../redux/appReducer";
import Preloader from "../Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {

        if(!this.props.initialized){
            return <Preloader />
        }

        return (
            <header className={'box'}>
                <a className="logo" href="/">
                    <img src="//www.deluxe.com/sites/deluxe.signupserver.com/files/social-green-icon.png" alt=""/>
                </a>

                <div className={'loginBlock'}>
                    {this.props.isAuth
                        ? <div> {this.props.login}
                            <button onClick={this.props.logout}>Log Out</button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>

            </header>
        );
    }
};

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);