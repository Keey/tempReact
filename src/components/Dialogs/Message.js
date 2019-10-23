import React from 'react';
import s from './Dialogs.module.css';

export default (props) => {
    return (
       <div className={s.dialogs_item}> {props.message}</div>
    )
}
