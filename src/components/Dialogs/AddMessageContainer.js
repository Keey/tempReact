import React from 'react';
import {addMessageActionCreator,updateMessageActionCreator} from "../../redux/dialogReduce";
import AddMessage from './AddMessage'
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return{
        newMessage: state.dialogs.newMessage,
        dialog: state.dialogs.dialogsDate,
        isAuth: state.authReduce.isAuth
    }
}


let AuthRedirectComponent = WithAuthRedirect(AddMessage);

let mapDispatchToProps = (dispatch) => {
    return{
        // onMessageChange:(text) =>{dispatch(updateMessageActionCreator(text));},
        sendMessage:(addNewMessage) =>{dispatch(addMessageActionCreator(addNewMessage));}
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(AuthRedirectComponent)
