import React, { useState } from 'react'

const TimerChallenge = ({ title, targetTime }) => {
    //const { title, targetTime } = props;
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimeout(() => {
            setTimerExpired(true);
            console.log('timer stopped');
        }, targetTime * 1000);
        setTimerStarted(true);
        console.log('timer started');
    }
    function handleStop() {

    }
    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className='challenge-time'>
                {targetTime}second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>)
}

export default TimerChallenge