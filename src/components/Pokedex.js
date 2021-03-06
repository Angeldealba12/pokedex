import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import InputIcon from '@material-ui/icons/Input';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../css/pokedex.css'
import '../css/filter.css'
import SelectBox from './SelectBox';
import { useRouteMatch } from 'react-router-dom';


const Pokedex = () => {
    
    const match = useRouteMatch();
    console.log(match);

    const { user, setUser } = useContext(UserContext)

    const handleLogOut = () => {
        setUser(null);
    }

    return (
        <div className="pokedex-container">
            <nav className="pokedex-navtab">
                <div className="pokedex-logo">
                    <AccountCircleIcon />
                </div>
                <h1>Welcome Trainer,  {user}</h1> 
                <div className="button-logOut">
                    <button onClick={handleLogOut}><InputIcon /></button>
                </div>
            </nav>
            <div className="pokedex-filter">
                <div className="pokedex-filter-select">
                    <SelectBox />
                </div>
            </div>
        </div>
    )
}

export default Pokedex