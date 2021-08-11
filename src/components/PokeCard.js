import React from 'react'
import { Link } from 'react-router-dom'
import '../css/pokeCard.css'

const PokeCard = ({name, img, types, hp, attack, defense, speed }) => {

    const TypeCap = types.charAt(0).toUpperCase() + types.slice(1);
    const nameCap = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div className="card">
            <div>
            <img alt={name} src={img}className="img" />
            </div>
            <div className="info">
            <h3>Type: {TypeCap}</h3>
            <h3>Hp: {hp}</h3>
            <h3>Attack: {attack}</h3>
            <h3>Defense: {defense}</h3>
            <h3>Speed: {speed}</h3>
            <Link><h2>{nameCap}</h2></Link>
            </div>
        </div>
    )
}

export default PokeCard 