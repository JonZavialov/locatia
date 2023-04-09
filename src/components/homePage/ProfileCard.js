import './profile-cards.css'
import getAge from '../../utils/getAge'
import SocialsContainer from './SocialsContainer'
import { useEffect, useState } from "react"
import redirectFromCard from '../../utils/redirectFromCard'
import getImageFromStorage from '../../firebase-utils/query/getImageFromStorage'
import getUserFromUUID from '../../firebase-utils/query/getUserFromUUID'

function ProfileCard({ profileInfo, uuid }){
    const [uri, setUri] = useState('https://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png')
    const [username, setUsername] = useState('')

    useEffect(() => {
        const asd = async () => {
            const response = await getImageFromStorage(`users/${uuid}/1.png`)
            setUri(response);
        };
        asd()
    }, [uuid])

    useEffect(() => {
        const asd = async () => {
            const user = await getUserFromUUID(uuid)
            setUsername(user)
        }
        asd()
    }, [uuid])
    
    // TODO: make images scroll when mouse is hovering
    return (
        <div className="profile-card" onClick={(e) => redirectFromCard(e, username) }>
            <img src={uri} alt={profileInfo.name} id="profile-image"></img>
            <h3>{profileInfo.name}</h3>
            <p>{profileInfo.school}</p>
            <p>{getAge(profileInfo.birthday)} years old</p>
            <SocialsContainer socials={profileInfo.socials}/>
        </div>
    )
}

export default ProfileCard