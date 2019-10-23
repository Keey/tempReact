import React from 'react';
import UsersAPIComponent from "./UserAPIComponent";
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setisFetching
} from "../../redux/usersReduce";

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
    }
};


export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setisFetching })(UsersAPIComponent);