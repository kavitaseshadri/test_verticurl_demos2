import React, { useState } from 'react'

const List = () => {
    //2 state variables will be required, one for the input field, one for the ul
    const [text, setText] = useState();//this is for the input field
    const [listItem, setListItem] = useState([]);
    //when some value has to change on the UI, it will always be a state variable
    const textFieldHandler = (event) => {
        let tempValue = event.target.value;
        console.log('value entered in the text field ' + tempValue);
        setText(tempValue);
    }
    const addItemHandler = (event) => {
        //text-state variable
        //listItem.push(text);//This does not work in reactjs
        //the first attribute or variable returned by useState is a read obly variable
        //its value cannot be changed directly.
        //it has to be changed using it's corresponding state function
        //if an array is involved, then one more step needs to be introduced
        let array1 = ['a', 'b', 'c'];
        console.log(array1);
        array1.push('123');
        console.log(array1);
        array1 = [...array1, "345"];
        console.log(array1);
        //array=[];    //new array gets created
        let updatedArray = [...listItem];//this is a new array with all existing items
        updatedArray = [...listItem, text];//this is the new array, with all existing items and a new item
        setListItem(updatedArray);
    }
    const myList = listItem.map((item, index) => <li key={index}>{item}</li>)

    return (
        <div>
            <h1>List Demo1</h1>
            <input value={text} onChange={textFieldHandler}></input>
            <button onClick={addItemHandler}>Add Item</button>
            <ul>{myList}</ul>
        </div>
    )
}

export default List;