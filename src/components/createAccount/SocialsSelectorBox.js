function SocialsSelectorBox({ callback }){
    return (
        <div id="socials-select">
            <p onClick={(e) => handleSocialSelect(e, callback)}>Instagram</p>
            <p onClick={(e) => handleSocialSelect(e, callback)}>Tiktok</p>
        </div>
    )
}

function handleSocialSelect(e, selectCallback){
    if (!e.target.className) e.target.className = "selected";
    else (e.target.className = "")
    selectCallback(e.target.innerText)
}

export default SocialsSelectorBox