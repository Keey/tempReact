import React from 'react';
import './header.scss';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {

                let {id, email, login} = response.data.data;

                this.props.setAuthUserData(id, email, login);

            } else {
                console.log('resultCode 1');
            }
        });
    }

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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);