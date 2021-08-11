import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Types from './Types';

const SelectBox = () => {

    const [types, setTypes] = useState([]);
    const [typeName, setTypeName] = useState('')
    const [showTypes, setShowTypes] = useState(false)

    useEffect(() => {
         
        const baseURL = 'https://pokeapi.co/api/v2/type'
        axios.get(baseURL).then((response) => {
            const { results } = response.data
            setTypes(results)
        })

        }, [])

    return (
            <div className="list">
            <div className="input-button">
            <input placeholder="Select type.." value={typeName} onChange={(e) => setTypeName(e.target.value)} /> 
            <button onClick={() => setShowTypes(true)}><ExpandMoreIcon/></button>
            {
                showTypes ? 
                <div className="typesBox">
                { 
                    types.map((type) => {
                        return (
                            <div className="pokeType" key={type.name} onClick={() => {
                                setTypeName(type.name)
                                setShowTypes(false)
                                }} >
                               {type.name} 
                            </div>
                        )
                    })
                }
                </div> : null
            }
            
            </div>
                <div className="searchBox">
                
                </div>  
                <div className="results">
                <Types queryTerm={typeName}/>     
                </div>     
            </div>       
    )
}

export default SelectBox;