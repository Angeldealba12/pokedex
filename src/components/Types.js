import { useState, useEffect } from 'react'
import { getPokemonBytype } from './GetTypes'
import PokeTypes from './PokeTypes';


function Types({queryTerm}) {

  const[data, setData] = useState([])

  useEffect(() => {
    if(queryTerm) {
      const func = async() => {
        const res = await getPokemonBytype(queryTerm)
        setData(res.pokemon)
      }
      
      func()
      
    }
  }, [queryTerm])

  

 const list = data.slice(0, 4).map((value) => <PokeTypes url={value.pokemon.url} key={value.pokemon.name}/>)
  
  return (
    <>
     {list}   
    </>
  );
}

export default Types;