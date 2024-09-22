import React from 'react'
import AnimalShow2 from './components/AnimalShow2'

const AnimalApp2 = () => {
    const handleClick = () => {
        console.log('button was clicked');
    }

    return (
        <div>
            <h1>AnimalApp2</h1>
            <button onClick={handleClick}>Add Animal</button>
        </div>
    )
}

export default AnimalApp2