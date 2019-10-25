import {authAPI} from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA';

let initState = {
    userId:null,
    email:null,
    login: null,
    isAuth: false,
}

const authReduce = (state = initState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login }});

// thunk function

export const getAuth = () => (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login))
            }
        });
}

// end thunk

export default authReduce;