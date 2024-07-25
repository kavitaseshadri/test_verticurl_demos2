import React from 'react'

const ProfileCard3 = ({ title, handle, price, offer }) => {
    return (
        <div>
            <h1>Title is {title}</h1>
            <h3>Handle is {handle}</h3>
            <h2>Price is {price}</h2>
            {/* Conditional Rendering */}
            <h2>offer?{offer}</h2>
            <h2>{offer && <span>You have an offer!!!</span>}</h2>
        </div>
    )
}

export default ProfileCard3