import { useState, useEffect } from "react";
import getImageFromStorage from "../../firebase-utils/query/getImageFromStorage";

const socialsLogos = {
    "instagram": {
        logo: "/assets/instagram.png",
        link: "https://www.instagram.com/"
    },
    "tiktok": {
        logo: "/assets/tiktok.png",
        link: "https://www.tiktok.com/@"
    }
}

function SocialsBox({ platform, handle, display, clickFunc }){    
    const [uri, setUri] = useState('')
    
    useEffect(() => {
        const asd = async () => {
            if (!socialsLogos[platform]) setUri('')
            else {
                const response = await getImageFromStorage(socialsLogos[platform].logo)
                setUri(response);
            }
        };
        asd()
    }, [platform])
    
    if(socialsLogos[platform] && handle) return (
        <div className="socials-box" onClick={() => window.open(socialsLogos[platform].link + handle, '_blank')}>
            <img src={uri} alt={platform}></img>
            <p>{display}</p>
        </div>
    )
    
    else if (clickFunc) return (
        <div className="socials-box" onClick={clickFunc} >
            <p>{display}</p>
        </div>
    )

    else return null
}

export default SocialsBox