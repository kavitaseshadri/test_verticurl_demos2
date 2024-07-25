import React from 'react'
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import ProfileCard6 from './components/ProfileCard6';

const profileObjects = [
    { title: 'Alexa', handle: '@alexa99', image: AlexaImage },
    { title: 'Cortana', handle: '@cortana32', image: CortanaImage, offer: '10%' },
    { title: 'Siri', handle: '@siri01', image: SiriImage },
]


const ProfileApp6 = () => {
    return (
        <div>
            <ProfileCard6
                title={profileObjects[0].title}
                handle={profileObjects[0].handle}
                image={profileObjects[0].image}
            >
            </ProfileCard6>
            <ProfileCard6
                title={profileObjects[1].title}
                handle={profileObjects[1].handle}
                image={profileObjects[1].image}
            >
            </ProfileCard6>
            <ProfileCard6
                title={profileObjects[2].title}
                handle={profileObjects[2].handle}
                image={profileObjects[2].image}
            >
            </ProfileCard6>
        </div>
    )
}

export default ProfileApp6