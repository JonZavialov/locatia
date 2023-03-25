const socialsLogos = {
    "instagram": {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        link: "https://www.instagram.com/"
    },
    "tiktok": {
        logo: "https://cdn-icons-png.flaticon.com/512/5969/5969008.png",
        link: "https://www.tiktok.com/@"
    }
}
// TODO: host images on firebase

function SocialsBox({platform, handle}){
    if(handle) return (
        <div className="socials-box" onClick={() => window.open(socialsLogos[platform].link + handle, '_blank')}>
            <img src={socialsLogos[platform].logo} alt={platform}></img>
            <p>@{handle}</p>
        </div>
    )
    else return null
}

export default SocialsBox