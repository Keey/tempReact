import React from "react";
import s from '../FormControl/FormControl.module.css'

const FormItem = ({input, meta, child, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={( hasError ? s.error : '' )}>
             <div>{ props.children }</div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )

}

export const Textarea = (props) => {
    const {input,meta,child, ...restProps} = props;
    return <FormItem {...props}> <textarea {...input} {...restProps}/> </FormItem>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormItem {...props}> <input {...input} {...restProps}/> </FormItem>
}
