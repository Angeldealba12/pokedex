import React from 'react'
import { useParams } from 'react-router-dom'
import '../css/pokemonPage.css'
import axios from 'axios'
import { useState } from 'react'

const Pokemon = () => {

    const [ img, setImg ] = useState()

    const { username } = useParams()

    axios.get(`https://pokeapi.co/api/v2/pokemon/${username}`)
        .then(response => {
            const results = response.data;
            const { other } = results.sprites
            setImg(other.dream_world.front_default)
        })

    return (
        <div className="container-pokepage">
            <div className="pokepage-child">
                <div className="infoContainer">
                <h1>{username.toUpperCase()}</h1>
                </div>
                <div className="imgContainer">
                    <img src={img} alt={username} />
                </div>
            </div>
        </div>
    )
}

export default Pokemon