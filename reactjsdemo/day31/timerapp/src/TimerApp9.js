import React from 'react'
import Player from './v9/Player'
import TimerChallenge from './v9/TimerChallenge'

const TimerApp9 = () => {
    return (
        <>
            <Player />
            <div id="challenges">
                <TimerChallenge title="Easy" targetTime={1} />
                <TimerChallenge title="Not easy" targetTime={5} />
                <TimerChallenge title="Getting tough" targetTime={10} />
                <TimerChallenge title="Pros only" targetTime={15} />
            </div>
        </>
    )
}

export default TimerApp9