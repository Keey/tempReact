import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FormControl/FormControls";
import {required} from "../../utils/validation/valid";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from "../common/FormControl/FormControl.module.css";

const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"Email"} component={Input} type="text" placeholder={"Login"} validate={[required]}/>
        </div>
        <div>
            <Field name={"Password"}  component={Input} type="password" placeholder={"Password"} validate={[required]}/>
        </div>
        <div>
            <label><Field
                name={"rememberMe"}
                component={Input}
                validate={[required]}
                type="checkbox"
            />Remember me</label>
        </div>
        {props.error ? <div className={s.summary_error}> {props.error} </div>
            : ''}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.Email,formData.Password,formData.rememberMe);
        console.log(formData.Email);
        // debugger
    }

    if(props.isAuth){
        return <Redirect to={"/article"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.authReduce.isAuth
})

export default connect(mapStateToProps,{login})(Login);
