import React from 'react'
import Card from '../Components/Card'
import { useCharStates } from '../Context/Context'

const Favs = () => {

    const {state} = useCharStates()
    
  return (
    <div>
        {state.favs.map(fav => <Card char={fav} key={fav.id}/> )}
    </div>
  )
}

export default Favs