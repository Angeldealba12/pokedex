import React from 'react'
import InputIcon from '@material-ui/icons/Input';
import PersonIcon from '@material-ui/icons/Person';

const LogIn = () => {
    return (
        <div className="login-container">
            <div className="logo"></div>
            <div className="login-child">
                <form className="login-form">
                    <h1>Login</h1>
                    
                    <div className="input-container">
                    <div className="btn-grad grad-1"><PersonIcon/></div>
                        <input type="text" placeholder="Enter username.."/>
                        <button type="submit" className="btn-grad"><InputIcon/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn