import React from 'react'

const MapDemo = () => {
    const myArray = ['Apple', 'Banana', 'Orange', 'Kiwi', 'Dragon Fruit'];
    const myList1 = myArray.map((item, index) => {
        return <li key={index}>{item}</li>
    });

    return (
        <div>
            <h1>MapDemo</h1>
            <ul>
                {myList1}
            </ul>
            <ul>
                <li>{myArray[0]}</li>
                <li>{myArray[1]}</li>
                <li>{myArray[2]}</li>
                <li>{myArray[3]}</li>
                <li>{myArray[4]}</li>
            </ul>
            <ul>
                {myArray.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default MapDemo