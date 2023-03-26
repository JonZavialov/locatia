import './profile-cards.css'
import getAge from '../../utils/getAge'
import SocialsContainer from './SocialsContainer'
import getImageFromUUID from '../../firebase-utils/getImageFromUUID'
import React from 'react'

function ProfileCard({profileInfo}){
    const [uri, setUri] = React.useState('')  

    React.useEffect(() => {
        const asd = async () => {
            const response = await getImageFromUUID(profileInfo.uuid)
            console.log(response);
            setUri(response);
        };
        asd()
    }, [profileInfo])
    
    return (
        <div className="profile-card">
            <img src={uri} alt={profileInfo.name} id="profile-image"></img>
            <h3>{profileInfo.name}</h3>
            <p>{profileInfo.school}</p>
            <p>{getAge(profileInfo.birthday)} years old</p>
            <SocialsContainer socials={profileInfo.socials}/>
        </div>
    )
}

export default ProfileCard