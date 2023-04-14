function DiscussionHeader({ userInfo }){
    return (
        <div id="discussion-header">
            <img src={userInfo.profilePic} alt={userInfo.name} />
            <h1>{userInfo.name}</h1>
            <p>@{userInfo.username}</p>
        </div>
    )
}

export default DiscussionHeader;