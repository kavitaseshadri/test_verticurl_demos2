import React, { useState, useRef } from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    //we are declaring a variable that can store reference of an HTML element
    const nameInputRef = useRef();//this will be mapped to an HTML element itself!
    //document.getElementById("username");
    const ageInputRef = useRef();//this will be mapped to an HTML element itself!
    const [error, setError] = useState();//this only maps to one particular attribute of the HTML element
    //const [name, setName] = useState();
    //document.getElementById("username").value;

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)',
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0)',
            })
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';//here were changing the property, ideally avoid it!
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id="username" type="text" ref={nameInputRef}></input>
                    <label htmlFor='age'>Age (years)</label>
                    <input id="age" type='number' ref={ageInputRef}></input>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser