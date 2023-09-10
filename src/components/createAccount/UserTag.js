function UserTag({ tag, actionCallback, action }){
    return (
        <div className="user-tag">
            <p>{tag}</p>
            <div className="remove-tag-button" onClick={() => actionCallback(tag)}>{action}</div>
        </div>
    )
}

export default UserTag