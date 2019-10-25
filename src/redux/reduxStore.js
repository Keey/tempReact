import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import articleReduce from "./articleReduce";
import dialogReduce from "./dialogReduce";
import asideReduce from "./asideReduce";
import usersReduce, {getUsers} from "./usersReduce";
import authReduce from "./authReducer";
import { reducer as formReducer } from 'redux-form'

let redusers = combineReducers({
    article : articleReduce,
    dialogs : dialogReduce,
    aside : asideReduce,
    userPage : usersReduce,
    authReduce : authReduce,
    form: formReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;