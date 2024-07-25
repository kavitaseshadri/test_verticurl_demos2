import React, { useState } from 'react'
import bird from '../svg/bird.svg';
import cat from '../svg/cat.svg';
import cow from '../svg/cow.svg';
import dog from '../svg/dog.svg';
import gator from '../svg/gator.svg';
import heart from '../svg/heart.svg';
import horse from '../svg/horse.svg';

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
};
const AnimalShow6 = ({ type }) => {
    const [clicks, setClicks] = useState(0);
    const handleClick = (event) => {
        setClicks(clicks + 1);
    }
    return (
        <div onClick={handleClick}>
            <img alt="animal" src={svgMap[type]}></img>
            <img alt="heart" src={heart} style={{ width: 10 + 10 * clicks + 'px' }}></img>
        </div>
    )
}

export default AnimalShow6