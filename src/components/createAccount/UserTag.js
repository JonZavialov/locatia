function UserTag({ tag, actionCallback, action }){
    return (
        <div className="user-tag">
            <p>{tag}</p>
            {
                actionCallback && action &&
                <div className="remove-tag-button" onClick={() => actionCallback(tag)}>{action}</div>
            }
        </div>
    )
}

export default UserTag