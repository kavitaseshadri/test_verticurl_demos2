import React from 'react'
import ProfileCard3 from './components/ProfileCard3'

const ProfileApp3 = () => {
    return (
        <div>
            <h1>Personal Digital Assistants</h1>
            <ProfileCard3 title="Alexa" handle="@alexa99" price="9999"></ProfileCard3>
            <ProfileCard3 title="Cortona" handle="@cortana32" offer="10% off"></ProfileCard3>
            <ProfileCard3 title="Siri" handle="@siri01"></ProfileCard3>
        </div>
    )
}

export default ProfileApp3