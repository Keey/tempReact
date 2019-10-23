import {combineReducers, createStore} from "redux";
import articleReduce from "./articleReduce";
import dialogReduce from "./dialogReduce";
import asideReduce from "./asideReduce";
import usersReduce from "./usersReduce";
import authReduce from "./authReducer";

let redusers = combineReducers({
    article : articleReduce,
    dialogs : dialogReduce,
    aside : asideReduce,
    userPage : usersReduce,
    authReduce : authReduce,
})

let store = createStore(redusers);

window.store = store;

export default store;