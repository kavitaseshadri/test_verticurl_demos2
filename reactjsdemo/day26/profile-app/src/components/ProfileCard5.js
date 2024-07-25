import React from 'react'

const ProfileCard5 = (props) => {
    let { title, handle, image, offer } = props.data;
    return (
        <div>
            <h1>Title is {title}</h1>
            <h2>Handle is {handle}</h2>
            <h2>Offer? {offer}</h2>
            <img src={image} alt={title}></img>
        </div>)
}

export default ProfileCard5