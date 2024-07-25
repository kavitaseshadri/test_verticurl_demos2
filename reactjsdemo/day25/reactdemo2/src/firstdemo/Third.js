import React, { useState } from 'react'

//State Management-how to access it, how to change it 
//useState-it's a hook, a hook is basically a JavaScript Function
const Third = () => {
    let text = "Hello World from Third Example";
    const [caption, setCaption] = useState('Original Caption');//first item it returns is a variable
    // caption = 1010;//If I try to change it like this, it will not be picked up by the UI
    const handleClickFunction = (event) => {
        setCaption(caption + "+");
        //when the state of the component is changed using the state function
        //then the component we will re-rendered on the screen with the changes
        //batching
    }

    return (
        <div>
            <h1>{text}</h1>
            <button onClick={handleClickFunction}>{caption}</button>
        </div>
    )
}

export default Third