import React from 'react';
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        let currentPage = this.props.currentPage;
        let pageSize = this.props.pageSize;
        this.props.getUsers(currentPage,pageSize);
    }

    onPageChanged = (p) => {
        let pageSize = this.props.pageSize;
        this.props.pageNavigator(p, pageSize);
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
                      toggleIsFollowing={this.props.toggleIsFollowing}
                      toggleInFollowing={this.props.toggleInFollowing}
                      followUser={this.props.followUser}
                      unfollowUser={this.props.unfollowUser}
                      isAuth={this.props.isAuth}
        />
        </>
    }
}

export default UsersAPIComponent;