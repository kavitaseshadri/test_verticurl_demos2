import React from 'react'
import ProfileCard8 from './ProfileCard8'

const ProfileList = ({ profiles }) => {
    let myList = profiles.map((item, index) =>
        <ProfileCard8 key={index} data={item} />);

    return (
        <div>
            <div>Personal Digital Assistants</div>
            <div>{myList}</div>
        </div>
    )
}

export default ProfileList