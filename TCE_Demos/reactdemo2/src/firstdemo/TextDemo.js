import React, { useState } from 'react'

const TextDemo = () => {
    //how to read and update the value of the text or input field
    //we will use this state variable to manage the value of the text field
    //we will be declaring an additional function and link it to the onChange event of the input field
    const [data, setData] = useState();

    const textChangeHandler = (event) => {
        let value = event.target.value;
        console.log("text value entered " + value);
        setData(value);
    }

    const btnClickHandler = (event) => {
        console.log('button was clicked');
        setData(data + '++');
    }

    return (
        <div>
            <h1>TextDemo</h1>
            <input type="text" value={data} onChange={textChangeHandler}></input>
            <button onClick={btnClickHandler}>Submit</button>
        </div>
    )
}

export default TextDemo