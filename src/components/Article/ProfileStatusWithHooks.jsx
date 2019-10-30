import React, {useState,useEffect} from "react";
import './Article.scss'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {

            setEditMode(false);

        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode && <span onDoubleClick={activateEditMode}>{props.status || 'add new status'}</span> }
            {editMode && <div><input autoFocus="" onChange={onStatusChange} value={status} onBlur={deactivateEditMode}/></div>}
        </div>
    )
}

export default ProfileStatusWithHooks;