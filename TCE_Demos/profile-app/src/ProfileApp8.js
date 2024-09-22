import React from 'react'
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import ProfileList from './components/ProfileList';

const profileObjects = [
    { title: 'Alexa', handle: '@alexa99', image: AlexaImage },
    { title: 'Cortana', handle: '@cortana32', image: CortanaImage, offer: '10%' },
    { title: 'Siri', handle: '@siri01', image: SiriImage },
]


const ProfileApp8 = () => {
    return (
        <ProfileList profiles={profileObjects}></ProfileList>
    )
}

export default ProfileApp8