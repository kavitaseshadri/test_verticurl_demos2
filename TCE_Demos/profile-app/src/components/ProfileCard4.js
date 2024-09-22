import React from 'react'

const ProfileCard4 = (props) => {
    let { title, handle, offer } = props.data;
    return (
        <div>
            <h1>ProfileCard4</h1>
            <h1>Title is{props.data.title} and {title}</h1>
            <h1>handle is{props.data.handle} and {handle}</h1>
            <h1>Offer is applied? {props.data.offer} and {offer}</h1>
        </div>
    )
}
export default ProfileCard4