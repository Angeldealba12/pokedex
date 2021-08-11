import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PokeCard from './PokeCard'

const PokeTypes = ( { url }  ) => {

    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [types, setTypes] = useState('')
    const [hp, setHp] = useState('')
    const [attack, setAttack] = useState('')
    const [defense, setDefense] = useState('')
    const [speed, setSpeed] = useState('')

    useEffect(() => {

        let baseURL = url;
        console.log(url)
        axios.get(baseURL).then((response) => {

            const { data } = response
            const { other } = data.sprites

            setName(data.name)

            if (other.dream_world.front_default === null) {
                setImg(data.sprites.back_default)
            } else {
                setImg(other.dream_world.front_default)
            }

            const arr = data.types

            arr.forEach((type) => {
                setTypes(type.type.name)
            })

            const arr2 = data.stats
            arr2.splice(3, 2)
            setHp(arr2[0].base_stat)
            setAttack(arr2[1].base_stat)
            setDefense(arr2[2].base_stat)
            setSpeed(arr2[3].base_stat)
        });

    }, [url]);


    


    return (
        <>
           <PokeCard
                name={name}
                img={img}
                types={types}
                hp={hp}
                attack={attack}
                defense={defense}
                speed={speed}
            />
        </>
    )
}

export default PokeTypes