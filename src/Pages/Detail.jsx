import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCharStates } from '../Context/Context'

const Detail = () => {
    const {state, dispatch} = useCharStates()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const {name, image, location, status} = state.char
    console.log(id)
    const url = 'https://rickandmortyapi.com/api/character/' + id
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                dispatch({type: 'GET_CHAR', payload: data})
                setLoading(false)
                toast('Se logró traer el detalle')
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error al traer el detalle',
                    timer: 2000
                })
            }
        }
        fetchData()
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