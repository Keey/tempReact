import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let SET_USER_DATA = 'SET_USER_DATA';

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReduce = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});

// thunk function

export const getAuth = () => async (dispatch) => {
    let response = await authAPI.me();
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true))
        }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuth());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
        dispatch(stopSubmit('login', {_error: message}));
    }
};


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
}

// end thunk

export default authReduce;