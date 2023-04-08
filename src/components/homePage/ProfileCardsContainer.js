import Menu from "../menu/Menu"
import ProfileCard from "./ProfileCard"

function ProfileCardsContainer({ data }){                
    return (
        <div id="profile-cards-container-container">
            <Menu />
            <div id="profile-cards-container">
                {
                    Object.keys(data).length !==0 ? 
                        Object.keys(data).map((x) => (
                            <ProfileCard key={x} profileInfo={data[x]} uuid={x} />
                        ))
                    :
                        <h1>No results found!</h1>
                }
            </div>
        </div>
    )
};

export default ProfileCardsContainer