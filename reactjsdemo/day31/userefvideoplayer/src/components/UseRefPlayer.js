import React, { useRef } from 'react';
import videoLink from '../video/notion_story.mp4';

const UseRefPlayer = () => {

    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();
    }

    return (
        <div>
            <video width="520" height="240" ref={videoRef} controls>
                <source src={videoLink} type="video/mp4" />
            </video>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default UseRefPlayer