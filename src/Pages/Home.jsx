import React from 'react'
import Card from '../Components/Card'
import { useCharStates } from '../Context/Context'

const Home = () => {

    const {state} = useCharStates()

  return (
    <div>
        {state.chars.map(char => <Card char={char} key={char.id}/>)}
    </div>
  )
}

export default Home