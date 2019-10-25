import React from 'react';
import {Field, reduxForm} from 'redux-form'

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const LoginForm = (props) => {


    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="login" component="input" type="text" placeholder={"Login"}/>
        </div>
        <div>
            <Field name="password" component="input" type="password" placeholder={"Password"}/>
        </div>
        <div>
            <label><Field
                name="employed"
                component="input"
                type="checkbox"
            />Remember me</label>
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;
