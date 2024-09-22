import React, { useState } from 'react'
import AnimalShow6 from './components/AnimalShow6'
function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}


const AnimalApp6 = () => {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow6 type={animal} key={index}></AnimalShow6>
    });

    return (
        <div>
            <h1>AnimalApp:6</h1>
            <div>
                <button onClick={handleClick}>Add Animal</button>
            </div>
            <div>{renderedAnimals}</div>
        </div>
    )
}

export default AnimalApp6