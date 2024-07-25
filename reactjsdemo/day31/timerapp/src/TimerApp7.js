import React from 'react'
import Player from './v7/Player'
import TimerChallenge from './v7/TimerChallenge'

const TimerApp7 = () => {
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

export default TimerApp7