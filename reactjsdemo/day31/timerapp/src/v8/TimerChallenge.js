import React, { useState, useRef } from 'react'
import ResultModal from './ResultModal';
//adding a modal component
//let timer;

const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef();//this at this point is just a normal variable without any type
    const dialog = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        //a timer object is being  created here in handleStart, 
        //but now handleStop wants to access this timer so that it can stop it when required
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            console.log('timer ended');
            console.log(dialog);
            dialog.current.showModal();
            //here TimerChallenge is tightly coupled with ResultModal
            //if ResultModal changes the type of Dialog then we will have to call a different function here
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
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
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