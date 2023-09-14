import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Context/Context'

const Detail = () => {
    const {state, dispatch} = useCharStates()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const {name, image, location, status} = state.char
    console.log(id)
    const url = 'https://rickandmortyapi.com/api/character/' + id
  
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'GET_CHAR', payload: data})
            setLoading(false)
        })
    }, [])
  
    return (
    <div>
        {loading ? 'Cargando...' : <>
            <h1>Name: {name}</h1>
            <img src={image} alt="" />
            <h3>Location: {location.name}</h3>
            <h3>Status: {status}</h3>
        </>}
    </div>
  )
}

export default Detail