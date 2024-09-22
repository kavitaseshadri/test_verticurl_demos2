import React from 'react'
import bird from '../svg/bird.svg';
import cat from '../svg/cat.svg';
import cow from '../svg/cow.svg';
import dog from '../svg/dog.svg';
import gator from '../svg/gator.svg';
import heart from '../svg/heart.svg';
import horse from '../svg/horse.svg';

const foo = {
    bar: 123,
    baz: false,
}
let a = 10;
let b = 20;
const tempObject1 = {
    a: a,
    b: b,
    c: a,
    d: b,
}
const tempObject2 = {
    a,
    b,
}
const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
}

const AnimalShow5 = ({ type }) => {
    return (
        <div>
            <img alt="animal" src={svgMap[type]}></img>
        </div>
    )
}

export default AnimalShow5