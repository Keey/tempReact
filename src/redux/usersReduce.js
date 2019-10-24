import {userAPI} from "../api/api";
import thunk from "redux-thunk";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let TOTAL_COUNT_USER = 'TOTAL-COUNT-USER';
let TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
let TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    toggleInFollowing: []
}

const userReduce = (state = initState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOTAL_COUNT_USER: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                toggleInFollowing: action.isFetching
                    ? [...state.toggleInFollowing, action.userId]
                    : state.toggleInFollowing.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }

}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: TOTAL_COUNT_USER, totalCount});
export const setisFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowing = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId});


// thunk functions

export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(setisFetching(false));

        userAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(setisFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));

        });

    }
}

export const pageNavigator = (p,pageSize) => {
    return (dispatch) => {

        dispatch(setCurrentPage(p));
        dispatch(setisFetching(false));

        userAPI.getUsers(p, pageSize).then(data => {
            dispatch(setisFetching(false));
            dispatch(setUsers(data.items));
        });

    }
}

export const followUser = (userId) => {
    return (dispatch) => {

        dispatch(toggleIsFollowing(true, userId));

        userAPI.followUser(userId).then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(follow(userId))
                }

                dispatch(toggleIsFollowing(false, userId))

            }
        );

    }
}

export const unfollowUser = (userId) => {
    return (dispatch) => {

        dispatch(followUser(userId));
        dispatch(toggleIsFollowing(true, userId));

        userAPI.unfollowUser(userId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
            dispatch(toggleIsFollowing(false, userId))
            });
    }
}

//end thunk

export default userReduce;