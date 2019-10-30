import React from 'react';
import './header.scss';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logout,} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.authReduce.isAuth,
    login: state.authReduce.login
});

export default connect(mapStateToProps, {getAuth,logout})(HeaderContainer);