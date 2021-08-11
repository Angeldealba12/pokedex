import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Types from './Types';
import PokeContainer from './PokeContainer';

const SelectBox = () => {

    const [value, setValue] = useState('')
    const [search, setSearch] = useState('')
    const [types, setTypes] = useState([]);
    const [typeName, setTypeName] = useState('')
    const [showTypes, setShowTypes] = useState(false)
    const [display, setDisplay] = useState('flex')
    const [display1, setDisplay1] = useState('flex')

    useEffect(() => {

        const baseURL = 'https://pokeapi.co/api/v2/type'
        axios.get(baseURL).then((response) => {
            const { results } = response.data
            setTypes(results)
        })

    }, [])

    const handleSelect = (type) => {
        setTypeName(type.name)
        setShowTypes(false)
        setDisplay1('none')
        setValue('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(value)
        setTypeName('')
        setDisplay('none')
        setDisplay1('flex')
    }

    return (
        <div className="list">
            <div className="input-button">
                <input placeholder="Select type.." value={typeName} onChange={(e) => setTypeName(e.target.value)} />
                <button onClick={() => setShowTypes(true)}><ExpandMoreIcon /></button>
                {
                    showTypes ?
                        <div className="typesBox">
                            {
                                types.map((type) => {
                                    return (
                                        <div className="pokeType" key={type.name} onClick={() => { handleSelect(type) }} >
                                            {type.name}
                                        </div>
                                    )
                                })
                            }
                        </div> : null
                }

            </div>
            <div className="searchBox">
                <form onSubmit={handleSubmit} className="input-button form">
                    <input placeholder="Name/Id.." value={value}
                        onChange={(e) =>
                            setValue(e.target.value)} />
                    <button>search</button>
                </form>
            </div>

            {search.length !== 0 ?
                <div className="results" style={{ display: display1 }}>
                    <PokeContainer search={search} />
                </div> : null
            }

            {
                typeName.length !== 0 ? <div className="results">
                    <Types queryTerm={typeName} />
                </div> : <div style={{ display: display }} className="logo-2"></div>
            }
        </div>
    )
}

export default SelectBox;