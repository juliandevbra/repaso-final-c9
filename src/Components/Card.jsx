import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCharStates } from '../Context/Context'

const Card = ({char}) => {

    const {state,dispatch} = useCharStates()

    const findFav = state.favs.find(fav => fav.id == char.id)

    const handleFav = () => {
        if(findFav) {
          const filterFavs = state.favs.filter(fav => fav.id != char.id)
          dispatch({type: 'DELETE_FAV', payload: filterFavs})
          toast('Se eliminó de favoritos')
        } else {
          dispatch({type: 'ADD_FAV', payload: char})
          toast('Se agregó a favoritos')
        }
    }

  return (
    <div>
        <Link to={'/detail/' + char.id}>
        {/* <Link to={`/detail/${char.id}`}> */}
            <h3>{char.name}</h3>
            <img src={char.image} alt="" />
            <h4>{char.species}</h4>
        </Link>
        <button onClick={handleFav}>{findFav ? '🌟' : '⭐' }</button>
    </div>
  )
}

export default Card