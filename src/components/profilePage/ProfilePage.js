import getImageFromUUID from "../../firebase-utils/query/getImageFromUUID";
import ProfileBanner from "./ProfileBanner";
import "./profilePage.css";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import SocialsBox from "../homePage/SocialsBox";
import clickedContact from "../../utils/clickedContact";

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
            <div id="gallery-contacts">
                {!uri && 'Loading...'}
                {uri && <Carousel images={[uri].concat(data.images)} name={data.name}/>}
                <div id="contact-area">
                    <SocialsBox display={'Connect'} clickFunc={clickedContact} />     
                </div>
            </div>
            <hr />
            <h2>About</h2>
            <p>{data.bio}</p>
        </>
    )
}

export default ProfilePage;