import Menu from "../menu/Menu"
import ProfileCard from "./ProfileCard"

function ProfileCardsContainer({ data }){                
    return (
        <div id="profile-cards-container-container">
            <Menu />
            <div id="profile-cards-container">
                {
                    Object.keys(data).length !==0 ? 
                        Object.entries(data).map(([uuid, obj]) => ({
                            uuid,
                            ...obj
                        })).sort((a, b) => b.timestamp - a.timestamp).map((x) => (
                            <ProfileCard key={x.uuid} profileInfo={x} uuid={x.uuid} />
                        ))
                    :
                        <h1>No results found!</h1>
                }
            </div>
        </div>
    )
};

export default ProfileCardsContainer