import React from 'react'
import { Link } from 'react-router-dom'
import { useCharStates } from '../Context/Context'

const Card = ({char}) => {

    const {dispatch} = useCharStates()
    const addFav = () => {
        dispatch({type: 'ADD_FAV', payload: char})
    }
  return (
    <div>
        <Link to={'/detail/' + char.id}>
        {/* <Link to={`/detail/${char.id}`}> */}
            <h3>{char.name}</h3>
            <img src={char.image} alt="" />
            <h4>{char.species}</h4>
        </Link>
        <button onClick={addFav}>⭐</button>
    </div>
  )
}

export default Card