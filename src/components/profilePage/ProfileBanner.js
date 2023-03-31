import './profilePage.css'
import getAge from '../../utils/getAge'
import SocialsContainer from "../homePage/SocialsContainer";

function ProfileBanner({ data }){
    // TODO: add dots or line between paragraphs
    return(
        <>
            <div id="profile-banner">
                <p>@{data.username}</p>
                <p>•</p>
                <p>{data.school}</p>
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