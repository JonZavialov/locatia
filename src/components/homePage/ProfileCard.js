import './profile-cards.css'
import getAge from '../../utils/getAge'
import SocialsContainer from './SocialsContainer'
import getImageFromUUID from '../../firebase-utils/getImageFromUUID'
import React from 'react'
import $ from 'jquery'

function ProfileCard({profileInfo}){
    const [uri, setUri] = React.useState('')
    const [isHovered, setIsHovered] = React.useState(false);


    React.useEffect(() => {
        const asd = async () => {
            const response = await getImageFromUUID(profileInfo.uuid)
            setUri(response);
        };
        asd()
    }, [profileInfo])

    React.useEffect(() => {
        if(isHovered){
            $('#profile-cards-container').find('.profile-card:not(.hovered)').fadeTo(500, 0.2)
        }else{
            $('#profile-cards-container').find('.profile-card').fadeTo(200, 1)
        }
    }, [isHovered])
    
    return (
        <div 
            className={`profile-card${isHovered ? ' hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={uri} alt={profileInfo.name} id="profile-image"></img>
            <h3>{profileInfo.name}</h3>
            <p>{profileInfo.school}</p>
            <p>{getAge(profileInfo.birthday)} years old</p>
            <SocialsContainer socials={profileInfo.socials}/>
        </div>
    )
}

export default ProfileCard