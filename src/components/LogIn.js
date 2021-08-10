import React from 'react'

const LogIn = () => {
    return (
        <div className="login-container">
           <div className="logo">
               
        </div> 
        <div className="login-child">
                <form className="login-form">
                    <h1>Login</h1>
                    <label>
                        Username: <br/>
                        <input type="text" />
                    </label>
                    <button type="submit" className="btn-grad">LOGIN</button>
                </form>
        </div>
        </div>
    )
}

export default  LogIn