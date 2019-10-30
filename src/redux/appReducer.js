import {getAuth} from "./authReducer";

let SET_INITIALIZED = 'SET_INITIALIZED';

let initialAPP = {
    initialized: false,
}

const appReducer = (state = initialAPP, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }

}

export const setInitialized = () => ({type: SET_INITIALIZED});

// thunk function

export const initializeApp = () => (dispatch) => {

    let promise = dispatch(getAuth());

    Promise.all([promise]).then( () => {
        dispatch(setInitialized());
    } )

}


// end thunk

export default appReducer;