import axios from 'axios'
import {createContext, useContext, useState, useReducer, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const CharStates = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_CHARS':
            return {...state, chars: action.payload}
        case 'GET_CHAR':
            return {...state, char: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'SWITCH_THEME':
            return {...state, theme: !state.theme}
        default:
            throw new Error()
    }
}

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const initialState = {
    chars: [],
    char: {},
    favs: initialFavState,
    theme: true,
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const url = 'https://rickandmortyapi.com/api/character/'

    useEffect(() => {
        axios(url)
        .then(res => {
            console.log(res.data.results)
            dispatch({type: 'GET_CHARS', payload: res.data.results})})
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])
    

    return(
        <CharStates.Provider value={{dispatch, state}}>
            {children}
        </CharStates.Provider>
    )
}

export default Context

export const useCharStates = () => useContext(CharStates)