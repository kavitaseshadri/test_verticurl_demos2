import React from 'react'
import ProfileCard2 from './components/ProfileCard2'

const ProfileApp2 = () => {
    return (
        <div>
            <h1>Personal Digital Assistant</h1>
            <ProfileCard2 title="Alexa" handle="@alexa99" price="9999"></ProfileCard2>
            <ProfileCard2 title="Cortana" handle="@cortana32" offer="10% off"></ProfileCard2>
            <ProfileCard2 title="Siri" handle="@siri01"></ProfileCard2>
        </div>
    )
}

export default ProfileApp2