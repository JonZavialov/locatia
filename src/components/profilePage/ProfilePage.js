import getImageFromUUID from "../../firebase-utils/query/getImageFromUUID";
import ProfileBanner from "./ProfileBanner";
import "./profilePage.css";
import SocialsContainer from "../homePage/SocialsContainer";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";

function ProfilePage({ data }){    
    const [uri, setUri] = useState('https://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png')
    // TODO: host this image on firebase

    useEffect(() => {
        const asd = async () => {
            const response = await getImageFromUUID(data.uuid)
            setUri(response);
        };
        asd()
    }, [data])
    
    return (
        <>
            <h1>{data.name}</h1>
            <ProfileBanner data={data} />
            {!uri && 'Loading...'}
            {uri && <Carousel images={[uri].concat(data.images)} name={data.name}/>}
            <hr />
            <div id="bio-container">
                <div id="bio">
                    <h2>About</h2>
                    <p>{data.bio}</p>
                </div>
                <div id="buttons-column">
                    <button>Contact</button>
                    <SocialsContainer socials={data.socials} />
                </div>
            </div>
        </>
    )
}

export default ProfilePage;