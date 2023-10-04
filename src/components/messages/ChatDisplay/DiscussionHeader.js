function DiscussionHeader({ userInfo }){
    return (
        <div id="discussion-header" onClick={() => window.location.href=`/profile/${userInfo.username}`}>
            <img src={userInfo.profilePic} alt={userInfo.name} />
            <h1>{userInfo.name}</h1>
            <p>@{userInfo.username}</p>
        </div>
    )
}

export default DiscussionHeader;