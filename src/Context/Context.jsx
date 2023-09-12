import axios from 'axios'
import {createContext, useContext, useState, useReducer, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const CharStates = createContext()


const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const Context = ({children}) => {
    const [chars, setChars] = useState([])
    const [favs, setFavs] = useState(initialFavState)
    const [theme, setTheme] = useState(true)
    const url = 'https://rickandmortyapi.com/api/character/'

    useEffect(() => {
        axios(url)
        .then(res => setChars(res.data.results))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favs))
    }, [favs])
    

    return(
        <CharStates.Provider value={{chars, favs, setFavs}}>
            {children}
        </CharStates.Provider>
    )
}

export default Context

export const useCharStates = () => useContext(CharStates)