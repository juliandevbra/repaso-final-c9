import React from 'react'
import { Link } from 'react-router-dom'
import { useCharStates } from '../Context/Context'

const Navbar = () => {

  const {state, dispatch} = useCharStates()
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favs</Link>

        <button onClick={() => dispatch({type: 'SWITCH_THEME'})}>{state.theme ? '☀' : '🌔'}</button>
    </div>
  )
}

export default Navbar