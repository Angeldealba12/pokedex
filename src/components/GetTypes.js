export const getPokemonBytype = async (queryTerm) => {
    const url =  `https://pokeapi.co/api/v2/type/${queryTerm}`
    const data = await fetch(url).then((res) => res.json()); 

    return data;
}

