import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'


const Pokedex = () => {

    const {user} =  useContext(UserContext)

    return (
       <div>
           {user}
       </div> 
    )
}

export default Pokedex