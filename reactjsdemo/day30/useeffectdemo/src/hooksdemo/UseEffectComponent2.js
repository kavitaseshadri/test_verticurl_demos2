import React, { useState, useEffect } from 'react'

const UseEffectComponent2 = () => {

    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    //side effect to happen when a resource type changes
    //resource type is a RESTAPI term used for Entity

    useEffect(() => {
        console.log('this will run every single time the component re-renders');
    });//this will run every single time the component re-renders

    useEffect(() => {
        console.log('this will run only once after first render');
    }, []);//this will run after first  render only, so only once

    useEffect(() => {
        console.log(resourceType + " was selected")
    },
        [resourceType]
    );//this will run everytime our depedency changes

    useEffect(() => {
        console.log('calling DB API in use Effect');
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => setItems(json));
        //if the state updates, component will re-render

        return () => {
            // useEffect can have an optional return statement,
            //it is used for clean up tasks
            //e.g. closing a DB connection
            console.log('return will always run after every exec');
        }

    }, [resourceType]);



    return (
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
            <h1>
                {resourceType}
            </h1>
            {items.map((item, index) => {
                return <pre key={index} >{JSON.stringify(item)}</pre>
            })}
        </div>
    )
}

export default UseEffectComponent2

//where is useEffect actually used?
//fetching data from DB, or calling a RESTApi to fetch data
//When you want to fetch in your application
//fetch-JSON-stringify
//axios object
