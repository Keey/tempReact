import {profileAPI, userAPI} from "../api/api";
import {setisFetching, setUsers} from "./usersReduce";

let ADD_POST = 'ADD-POST';
let SET_USER_PROFILE = 'SET-USER-PROFILE';
let SET_STATUS = 'SET_STATUS';


let initState = {
    postData: [
        {id: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', like: '1'},
        {
            id: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, fugiat!',
            like: '2'
        },
        {id: 3, description: 'Lorem ipsum dolor sit amet!', like: '54'}
    ],
    profile: null,
    status: ""
}

const articleReduce = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let body = action.addNewMessage
            return {
                ...state,
                postData: [...state.postData, {id: 4, description: body, like: '0'}],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS : {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (addNewMessage) => ({type: ADD_POST, addNewMessage});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

// thunk function

export const getUserProfile = (userId) => {
    return (dispatch) => {

        userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })

    }
}

export const getStatus = (userId) => (dispatch) => {

        profileAPI.getStatus(userId).then(response => {

            dispatch(setStatus(response.data))

        });
}

export const updateStatus = (status) => (dispatch) => {

        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });

}

// end thunk


export default articleReduce;