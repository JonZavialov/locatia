import ProfileCard from "./ProfileCard"

function ProfileCardsContainer({data}){    
    return (
        <div id="profile-cards-container">
            {data.map((x, i) => (
                <ProfileCard key={i} profileInfo={x}/>
                // TODO: Replace key with unique ID from database
            ))}
        </div>
    )
};

export default ProfileCardsContainer