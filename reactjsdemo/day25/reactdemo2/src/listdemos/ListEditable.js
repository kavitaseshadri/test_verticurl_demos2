import React, { useState } from 'react'

const ListEditable = () => {
    const [listItem, setListItem] = useState([]);
    const [text, setText] = useState();
    const textFieldHandler = (event) => {
        let tempValue = event.target.value;
        console.log('value entered in text field ' + tempValue);
        setText(tempValue);
    }
    const addItemHandler = (event) => {
        //text-state variable
        //listItem.push(text);//This does not work in ReactJS
        //this will change the content of the array
        let array1 = ['a', 'b', 'c'];
        console.log(array1);
        array1.push('123');
        console.log(array1);
        array1 = [...array1];
        console.log(array1);
        //array1 = [];//new array is getting created
        let updatedArray = [...listItem];//this is new array, with all existing values
        updatedArray = [...listItem, text];//new array, existing values plus appended new item
        setListItem(updatedArray);
        //listItem = updatedArray;
        //listItem.push(text);
    }
    const editItemHandler = (event, index) => {

    }
    const deleteItemHandler = (event, index) => {
        let updatedArray = [...listItem];
        updatedArray.splice(index, 1);
        setListItem(updatedArray);
    }
    const myList = listItem.map((item, index) => <li key={index}>
        {item}
        <button onClick={(event) => editItemHandler(event, index)}>Edit</button>
        <button onClick={(event) => deleteItemHandler(event, index)}>Delete</button>
    </li>)

    return (
        <div>
            <input onChange={textFieldHandler} value={text}></input>
            <button onClick={addItemHandler}>Add Item</button>
            <ul>{myList}</ul>
            <button onClick={(event) => { alert('demo button clicked!!!') }}></button>
        </div>
    )
}

export default ListEditable