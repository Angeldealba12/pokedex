import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../css/pokemonPage.css'
import axios from 'axios'
import { useState } from 'react'

const Pokemon = () => {

    const { username } = useParams()
    const [ img, setImg ] = useState()
    const [type, setType] = useState()
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [id, setId] = useState()
    const [forms, setForms] = useState()
    

    axios.get(`https://pokeapi.co/api/v2/pokemon/${username}`)
        .then(response => {
            const results = response.data;
            const { other } = results.sprites
            setImg(other.dream_world.front_default)
            const { name } = results.types[0].type
            setType(name)
            setHeight(results.height)
            setWeight(results.weight)
            setId(results.id)
            setForms(results.forms[0].name)
        })

    return (
        <div className="container-pokepage">
            <div className="pokepage-child">
                <div className="infoContainer">
                <h1>{username.toUpperCase()}</h1>
                <div className="info-pokedex">
                    <p>Category: {type}</p>
                    <p>ID: {id}</p>
                    <p>Evolves to: {username}</p>
                    <p>Height: {height}</p>
                    <p>weight: {weight}</p>
                    <p>Forms: {forms}</p>
                </div>
                <Link to="/pokedex">Go back</Link>
                </div>
                <div className="imgContainer">
                    <img src={img} alt={username} />
                </div>
            </div>
        </div>
    )
}

export default Pokemon