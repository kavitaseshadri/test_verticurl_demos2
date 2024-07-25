import React from 'react'
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import ProfileCard7 from './components/ProfileCard7';

const profileObjects = [
    { title: 'Alexa', handle: '@alexa99', image: AlexaImage },
    { title: 'Cortana', handle: '@cortana32', image: CortanaImage, offer: '10%' },
    { title: 'Siri', handle: '@siri01', image: SiriImage },
]

const ProfileApp7 = () => {
    let myList = profileObjects.map((item, index) =>
        <ProfileCard7 key={index} data={item}></ProfileCard7>
    )
    return (
        <div>
            <div>{myList}</div>
        </div>
    )
}

export default ProfileApp7