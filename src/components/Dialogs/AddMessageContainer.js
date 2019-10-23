import React from 'react';
import {addMessageActionCreator,updateMessageActionCreator} from "../../redux/dialogReduce";
import AddMessage from './AddMessage'
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        newMessage: state.dialogs.newMessage,
        dialog: state.dialogs.dialogsDate
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onMessageChange:(text) =>{dispatch(updateMessageActionCreator(text));},
        sendMessage:() =>{dispatch(addMessageActionCreator());}
    }
}

let AddMessageContainer = connect(mapStateToProps,mapDispatchToProps)(AddMessage);

export default AddMessageContainer;