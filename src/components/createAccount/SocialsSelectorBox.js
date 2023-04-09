function SocialsSelectorBox({ callback, selected }){
    return (
        <div id="socials-select">
            <p onClick={(e) => handleSocialSelect(e, callback)} className={selected.includes('Instagram') ? 'selected' : ''} >Instagram</p>
            <p onClick={(e) => handleSocialSelect(e, callback)} className={selected.includes('Tiktok') ? 'selected' : ''} >Tiktok</p>
            <p onClick={(e) => handleSocialSelect(e, callback)} className={selected.includes('Twitter') ? 'selected' : ''} >Twitter</p>
        </div>
    )
}

function handleSocialSelect(e, selectCallback){
    if (!e.target.className) e.target.className = "selected";
    else (e.target.className = "")
    selectCallback(e.target.innerText)
}

export default SocialsSelectorBox