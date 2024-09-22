import React, { useState, useEffect } from 'react'
import styles from './UseEffectComponent.module.css'

const UseEffectComponent = () => {
    const [firstCount, setFirstCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);
    //useEffect is also called side-effect
    //it is linked to the component rendering cycle
    //it's a hook, and we decide how many time do we want it to be called?
    //times is decided based on something called a dependency
    //the dependendcies are defined in the []
    //but the square bracket can also be skipped
    //that will cause useEffect() function to run every time the component re-renders
    //every declaration of useEffect() will be independent of the other declarations

    useEffect(() => {
        console.log('This will be called after first render');
        console.log("this will also be called after every render")
    });//here we are skipping [], that is the dependency
    //called after the 1st render of this component
    //also called after every re-render

    useEffect(() => {
        console.log('called after 1st render');
        console.log('every time firstCount changes');
    }, [firstCount]);

    useEffect(() => {
        console.log('called after 1st render');
        console.log('every time secondCount changes');
    }, [secondCount]);

    useEffect(() => {
        console.log('called after 1st render');
        console.log('every time firstCount and secondCount changes');
    }, [firstCount, secondCount]);
    //This will be called after 1st render
    //and only when the specified dependencies change 


    const incrementFirstCount = () => {
        setFirstCount((current) => ++current);
    }
    const incrementSecondCount = () => {
        setSecondCount((current) => ++current);
    }

    return (
        <div>
            <h1>UseEffectComponent Demo</h1>
            <div>
                <h1>{firstCount}</h1>
                <button type="button" className={styles.firstCount} onClick={incrementFirstCount}>
                    Increment First Count
                </button>
            </div>
            <div>
                <h1>{secondCount}</h1>
                <button type="button" className={styles.secondCount} onClick={incrementSecondCount}>
                    Increment Second Count
                </button>
            </div>
        </div>
    )
}

export default UseEffectComponent