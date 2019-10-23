import React from 'react';
import s from './Dialogs.module.css';
import Massage from "./Message";
import DialogItem from "./DialogItem";

export default (props) => {
 // debugger

    let dialogItems = props.dialog.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> );
    let messageItems = props.dialog.map( m => <Massage message={m.message} key={m.id} /> );

    let addMessageBtn = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = () => {
        let text = addMessageBtn.current.value;
        props.onMessageChange(text);
    }



    return(
        <div className={'box ' + s.wrap_dialogs}>
            <div className={s.dialogs}>
                <h2>Dialogs</h2>
                <div className='dialogsItems'>
                    {dialogItems}
                </div>
            </div>

            <div className={s.messages}>
                {messageItems}
                <div className={s.add_message_button}>
                    <h3>Message</h3>
                    <textarea onChange={onMessageChange} ref={addMessageBtn} value={props.newMessage} />
                    <button onClick={sendMessage}>Send Message</button>
                </div>
                {/*<AddMessage dispatch={props.dispatch} state={props.state}/>*/}
            </div>
        </div>
    )
}