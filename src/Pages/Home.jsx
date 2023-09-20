import React from 'react'
import Card from '../Components/Card'
import { useCharStates } from '../Context/Context'
import './Home.css'
const Home = () => {

    const {state} = useCharStates()

  return (
    <div className={state.theme ? 'home' : 'home-dark'}>
        {state.chars.map(char => <Card char={char} key={char.id}/>)}
    </div>
  )
}

export default Home