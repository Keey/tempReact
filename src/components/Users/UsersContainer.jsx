import React from 'react';
import UsersAPIComponent from "./UserAPIComponent";
import {connect} from "react-redux";
import {
    getUsers, followUser, unfollowUser, pageNavigator
} from "../../redux/usersReduce";

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


export default connect(mapStateToProps, {followUser, unfollowUser, getUsers, pageNavigator })(UsersAPIComponent);