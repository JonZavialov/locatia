import './profilePage.css'
import getAge from '../../utils/getAge'

function ProfileBanner({ data }){
    // TODO: add dots or line between paragraphs
    return(
        <div id="profile-banner">
            <p>@{data.username}</p>
            <p>{data.school}</p>
            <p>{getAge(data.birthday)} years old</p>
        </div>
    )
}

export default ProfileBanner