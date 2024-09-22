import React from 'react'
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import ProfileCard5 from './components/ProfileCard5';

const profileObjects = [
    { title: 'Alexa', handle: '@alexa99', image: AlexaImage },
    { title: 'Cortana', handle: '@cortana32', image: CortanaImage, offer: '10%' },
    { title: 'Siri', handle: '@siri01', image: SiriImage },
]

const ProfileApp5 = () => {
    return (
        <div>
            <ProfileCard5 data={profileObjects[0]}></ProfileCard5>
            <ProfileCard5 data={profileObjects[1]}></ProfileCard5>
            <ProfileCard5 data={profileObjects[2]}></ProfileCard5>
        </div>
    )
}

export default ProfileApp5