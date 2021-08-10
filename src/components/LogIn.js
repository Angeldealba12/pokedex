import React, { useContext, useState } from 'react'
import InputIcon from '@material-ui/icons/Input';
import PersonIcon from '@material-ui/icons/Person';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';

const LogIn = () => {

    const { setUser } =  useContext(UserContext)
    const [ input, setInput ] = useState('')
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(input)
        history.push('/pokedex')
    }

    return (
        <div className="login-container">
            <div className="logo"></div>
            <div className="login-child">
                <form onSubmit={handleSubmit} className="login-form">
                    <h1>Login</h1>
                    
                    <div className="input-container">
                    <div className="btn-grad grad-1"><PersonIcon/></div>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter username.."/>
                        <button type="submit" className="btn-grad"><InputIcon/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn