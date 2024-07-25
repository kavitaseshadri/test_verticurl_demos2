import React, { useState, useRef } from 'react'
import ResultModal from './ResultModal';
//exposing a component's API to other components
//let timer;

const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef();//this at this point is just a normal variable without any type
    const resultModelRef = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        //a timer object is being  created here in handleStart, 
        //but now handleStop wants to access this timer so that it can stop it when required
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            console.log('timer ended');
            console.log(resultModelRef);
            resultModelRef.current.open();
            resultModelRef.current.hello();
            //One more change, TimerChallenge will no longer have direct access to dialog
            //This function will now be added and exposed from ResultModal using useImperativeHandle
        }, targetTime * 1000);
        setTimerStarted(true);
        console.log('timer started');
    }
    function handleStop() {
        clearTimeout(timer.current);
        console.log('timer stopped');
    }

    return (
        <>
            <ResultModal ref={resultModelRef} targetTime={targetTime} result="lost" />
            <section className='challenge'>
                <h2>{title}</h2>
                {timerExpired && <p>You lost!</p>}
                <p className='challenge-time'>
                    {targetTime}second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge