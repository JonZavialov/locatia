import NavBar from "../navBar/NavBar"
import ProfileCard from "./ProfileCard"

function ProfileCardsContainer({ data }){        
    return (
        <>
            < NavBar />
            <div id="profile-cards-container">
                {Object.keys(data).map((x) => (
                    <ProfileCard key={x} profileInfo={data[x]} uuid={x} />
                ))}
            </div>
        </>
    )
};

export default ProfileCardsContainer