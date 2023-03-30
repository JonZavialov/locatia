import './profile-cards.css'
import getAge from '../../utils/getAge'
import SocialsContainer from './SocialsContainer'
import getImageFromUUID from '../../firebase-utils/query/getImageFromUUID'
import { useEffect, useState } from "react"
import redirectFromCard from '../../utils/redirectFromCard'

function ProfileCard({ profileInfo }){
    const [uri, setUri] = useState('https://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png')
    // TODO: host this image on firebase

    useEffect(() => {
        const asd = async () => {
            const response = await getImageFromUUID(profileInfo.uuid)
            setUri(response);
        };
        asd()
    }, [profileInfo])
    
    // TODO: make images scroll when mouse is hovering
    return (
        <div className="profile-card" onClick={(e) => redirectFromCard(e, profileInfo.username) }>
            <img src={uri} alt={profileInfo.name} id="profile-image"></img>
            <h3>{profileInfo.name}</h3>
            <p>{profileInfo.school}</p>
            <p>{getAge(profileInfo.birthday)} years old</p>
            <SocialsContainer socials={profileInfo.socials}/>
        </div>
    )
}

export default ProfileCard