import React, { useState, useEffect } from 'react'

const UseEffectComponent3 = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        console.log('resize useEffect was called');
        window.addEventListener('resize', handleResize);
        return () => {
            console.log('it will run after the exec of useEffect');
            window.removeEventListener('resize', handleResize);
        }
    })

    return (
        <div>{windowWidth}</div>
    )
}

export default UseEffectComponent3