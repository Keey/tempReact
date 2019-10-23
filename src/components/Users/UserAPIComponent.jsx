import React from 'react';
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {userAPI} from "../../api/api";


class UsersAPIComponent extends React.Component {

    componentDidMount() {

        this.props.setisFetching(false);

        let currentPage = this.props.currentPage;
        let pageSize = this.props.pageSize;

        userAPI.getUsers(currentPage,pageSize).then(data => {
            this.props.setisFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });

    }

    onPageChanged = (p) => {

        this.props.setCurrentPage(p);
        this.props.setisFetching(false);

        let pageSize = this.props.pageSize;

        userAPI.getUsers({p}, pageSize).then(data => {
            this.props.setisFetching(false);
            this.props.setUsers(data.items);
        });

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
        />
        </>
    }
}

export default UsersAPIComponent;