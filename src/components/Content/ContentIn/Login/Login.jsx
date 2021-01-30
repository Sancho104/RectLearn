import React from 'react';
import classes from './Login.module.css'



const Login = () => {
    return (
        <div className={classes.loginWrap}>
            <div className={classes.loginHeadler}>
                Write your login and password
            </div>
            <input type="text" placeholder='Login'/>
            <input type="password" placeholder='Password'/>
            <input type="button" value='Login'/>
        </div>
    );

}

export default Login;