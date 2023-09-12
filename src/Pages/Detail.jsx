import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Context/Context'

const Detail = () => {
    const [char, setChar] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    console.log(id)
    const url = 'https://rickandmortyapi.com/api/character/' + id
  
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setChar(data)
            setLoading(false)
        })
    }, [])
  
    return (
    <div>
        {loading ? 'Cargando...' : <>
            <h1>Name: {char.name}</h1>
            <img src={char.image} alt="" />
            <h3>Location: {char.location.name}</h3>
            <h3>Status: {char.status}</h3>
        </>}
    </div>
  )
}

export default Detail