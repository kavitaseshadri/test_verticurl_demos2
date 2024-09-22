import React from 'react'
import ProfileCard4 from './components/ProfileCard4'

const profileObjects = [
    { title: 'Alexa', handle: '@alexa99' },
    { title: 'Cortana', handle: '@cortana32', offer: '10%' },
    { title: 'Siri', handle: '@siri01' },
]

const ProfileApp4 = () => {
    return (
        <div>
            <ProfileCard4 data={profileObjects[0]}></ProfileCard4>
            <ProfileCard4 data={profileObjects[1]}></ProfileCard4>
            <ProfileCard4 data={profileObjects[2]}></ProfileCard4>
        </div>
    )
}

export default ProfileApp4