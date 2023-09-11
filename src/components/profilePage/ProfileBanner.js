import './profilePage.css'
import getAge from '../../utils/getAge'
import SocialsContainer from "../homePage/SocialsContainer";

function ProfileBanner({ data, username }){
    return(
        <>
            <div id="profile-banner">
                <p>@{username}</p>
                <p>•</p>
                <p>{data.city}</p>
                <p>•</p>
                <p>{getAge(data.birthday)} years old</p>
            </div>
            <div id="profile-socials">
            <SocialsContainer socials={data.socials} />
            </div>
        </>
    )
}

export default ProfileBanner