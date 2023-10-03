import { useState, useEffect } from 'react';
import getProfileFromUUID from '../../../firebase-utils/query/getProfileFromUUID';
import getCurrentUser from '../../../utils/getCurrentUser';
import getImageListFromUUID from '../../../firebase-utils/query/getImageListFromUUID';
import getImageFromRef from '../../../firebase-utils/query/getImageFromRef';
import getUserFromUUID from '../../../firebase-utils/query/getUserFromUUID';
import getAgeFromTimestamp from '../../../utils/getAgeFromTimestamp';

function IndividualChatDisplay({ chatInfo, onClick, cid, alternateUUID }){
    const [profile, setProfile] = useState(false);
    const [uuid, setUUID] = useState(false);
    const [profilePic, setProfilePic] = useState(false);
    const [username, setUsername] = useState(false);
    
    let otherUid = null;
    if(!alternateUUID){
        otherUid = chatInfo.users.filter((uid) => {
            return uid !== getCurrentUser().uid
        })[0];
    }else{
        otherUid = alternateUUID;
    }

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
            <div className="chat-text-display" onClick={() => {
                if (!alternateUUID){
                    onClick({
                        cid: cid,
                        user: {
                            profilePic,
                            username,
                            name: profile.name
                        }
                    })
                }
                else{
                    onClick({
                        profilePic,
                        username,
                        name: profile.name
                    })
                }
            }}>
                <div className="names">
                    <h1>{profile ? profile.name : null}</h1>
                    <p>{username ? '@' + username : null}</p>
                </div>
                {(chatInfo && chatInfo.messages) && <p className="recent-msg">{chatInfo.messages[chatInfo.messages.length - 1].msg}</p>}
                {(chatInfo && chatInfo.messages) && <p className="msg-timestamp">{getAgeFromTimestamp(chatInfo.messages[chatInfo.messages.length - 1].timestamp)}</p>}
            </div>
        </>
    )
}

export default IndividualChatDisplay