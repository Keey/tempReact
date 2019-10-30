import React from 'react';
import UsersAPIComponent from "./UserAPIComponent";
import {connect} from "react-redux";
import {
    getUsers, followUser, unfollowUser, pageNavigator
} from "../../redux/usersReduce";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        toggleInFollowing: state.userPage.toggleInFollowing,
    }
};



export default compose(
    connect(mapStateToProps, {followUser, unfollowUser, getUsers, pageNavigator }),
    WithAuthRedirect
)(UsersAPIComponent)
