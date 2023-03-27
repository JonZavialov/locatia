import ImageGrid from "./ImageGrid";
import getImageFromUUID from "../../firebase-utils/query/getImageFromUUID";
import React from "react";
import ProfileBanner from "./ProfileBanner";
import "./profilePage.css";

function ProfilePage({ data }){    
    const [uri, setUri] = React.useState('https://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png')
    // TODO: host this image on firebase

    React.useEffect(() => {
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
            <div id="profile-images">
                <img src={uri} alt={data.name} id="main-image" ></img>
                <ImageGrid images={data.images} />
            </div>
            <hr />
            <div id="bio-container">
                <div id="bio">
                    <h2>About</h2>
                    <p>{data.bio}</p>
                </div>
                <button>Contact</button>
            </div>
        </>
    )
}

export default ProfilePage;