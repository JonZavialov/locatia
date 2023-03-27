import ImageGrid from "./ImageGrid";
import getImageFromUUID from "../../firebase-utils/query/getImageFromUUID";
import React from "react";
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
        <div id="profile-images">
            <img src={uri} alt={data.name} id="main-image" ></img>
            <ImageGrid images={data.images} />
        </div>
    )
}

export default ProfilePage;