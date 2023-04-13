import { useState, useEffect } from 'react';
import getProfileFromUUID from '../../../firebase-utils/query/getProfileFromUUID';
import getCurrentUser from '../../../utils/getCurrentUser';
import getImageListFromUUID from '../../../firebase-utils/query/getImageListFromUUID';
import getImageFromRef from '../../../firebase-utils/query/getImageFromRef';
import getUserFromUUID from '../../../firebase-utils/query/getUserFromUUID';

function IndividualChatDisplay({ chatInfo }){
    const [profile, setProfile] = useState(false);
    const [uuid, setUUID] = useState(false);
    const [profilePic, setProfilePic] = useState(false);
    const [username, setUsername] = useState(false);
    
    const otherUid = chatInfo.users.filter((uid) => {
        return uid !== getCurrentUser().uid
    })[0];

    useEffect(() => {
        getProfileFromUUID(otherUid).then((user) => {
            setProfile(user.profile);
            setUUID(user.UUID);
        })
    }, [chatInfo, otherUid])

    useEffect(() => {
        getImageListFromUUID(otherUid).then(async(images) => {
            setProfilePic(await getImageFromRef(images[0]))
        })
    }, [otherUid])

    useEffect(() => {
        getUserFromUUID(uuid)
        .then((user) => {
            setUsername(user)
        })
    }, [uuid])
        
    return (
        <>
            {profilePic ? <img src={profilePic} alt={profile.name} /> : 'Loading...'}
            <h1>{profile ? profile.name : null}</h1>
            <p>{username ? '@' + username : null}</p>
        </>
    )
}

export default IndividualChatDisplay