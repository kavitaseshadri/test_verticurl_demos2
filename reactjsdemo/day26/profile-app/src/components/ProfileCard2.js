import React from 'react'

const ProfileCard2 = (props) => {
    return (
        <div>
            <h1>Title is{props.title}</h1>
            <h2>Handle is {props.handle}</h2>
            <h2>Price is {props.price}</h2>
            <h3>This is just a random statement</h3>
            {/* Conditional Rendering */}
            <h3>{props.offer ? props.offfer : "NO OFFER FOR YOU :P"}</h3>
        </div>
    )
}

export default ProfileCard2