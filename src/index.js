import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import store from "./redux/reduxStore"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"
//import {addPostState,updatePostText,updateMessageText,addMessageState,subscribe} from "./state";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);





