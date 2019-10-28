import React from 'react';
import s from './Dialogs.module.css';
import Massage from "./Message";
import DialogItem from "./DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControl/FormControls";
import {maxLengthCreator, required} from "../../utils/validation/valid";

export default (props) => {
    // debugger

    let dialogItems = props.dialog.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageItems = props.dialog.map(m => <Massage message={m.message} key={m.id}/>);

    // let addMessageBtn = React.createRef();

    // let sendMessage = () => {
    //     props.sendMessage();
    // };
    //
    // let onMessageChange = () => {
    //     let text = addMessageBtn.current.value;
    //     props.onMessageChange(text);
    // }

    const addNewMessage = (formData) => {
        props.sendMessage(formData.addNewMessage);
    }

    return (
        <div className={'box ' + s.wrap_dialogs}>
            <div className={s.dialogs}>
                <h2>Dialogs</h2>
                <div className='dialogsItems'>
                    {dialogItems}
                </div>
            </div>

            <div className={s.messages}>
                {messageItems}
                <PostDialog onSubmit={addNewMessage}/>
            </div>
        </div>
    )

}


let maxLenght = maxLengthCreator(100);
const dialogForm = (props) => {
    return (
        <div className={s.add_message_button}>
            <form onSubmit={props.handleSubmit}>

                <h3>Message</h3>
                <Field component={Textarea}  validate={[required,maxLenght]} name="addNewMessage" type="addNewMessage" placeholder="Enter Post" />
                <button>Add Post</button>
            </form>
        </div>
    )
}

const PostDialog = reduxForm({form: 'dialogPost'})(dialogForm)