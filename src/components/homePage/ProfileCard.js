import './profile-cards.css'
import getAge from '../../utils/getAge'

function ProfileCard({profileInfo}){
    return (
        <div className="profile-card">
            <img src="https://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png" alt={profileInfo.name}></img>
            <h3>{profileInfo.name}</h3>
            <p>{profileInfo.school}</p>
            <p>{getAge(profileInfo.birthday)} years old</p>
        </div>
    )
}

export default ProfileCard