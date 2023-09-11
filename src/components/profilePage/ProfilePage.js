import getImageListFromUUID from "../../firebase-utils/query/getImageListFromUUID";
import ProfileBanner from "./ProfileBanner";
import "./profilePage.css";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import SocialsBox from "../homePage/SocialsBox";
import clickedContact from "../../utils/clickedContact";
import getImageListFromRefList from "../../utils/getImageListFromRefList";
import UserTag from "../createAccount/UserTag";

function ProfilePage({ data, uuid, username }){
    const [images, setImages] = useState([])

    useEffect(() => {
        getImageListFromUUID(uuid)
        .then((imageRefList) => {
            getImageListFromRefList(imageRefList)
            .then((imageList) => {
                setImages(imageList)
            })
        })
   }, [uuid])

    return (
        <>
            <h1>{data.name}</h1>
            <ProfileBanner data={data} username={username} />
            <div id="gallery-contacts">
                {!images && 'Loading...'}
                {images && <Carousel images={images} name={data.name}/>}
                <div id="contact-area">
                    <SocialsBox display={'Connect'} clickFunc={clickedContact} />
                    <p id="tags-label">Tags:</p>
                    <div style={{
                        'display': 'flex',
                        'flexWrap': 'wrap',
                    }}>
                        {
                            data.tags.map((tag, index) => (
                                <UserTag key={index} tag={tag} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <hr />
            <h2>About</h2>
            <p>{data.bio}</p>
        </>
    )
}

// TODO: line 27 can be changed later

export default ProfilePage;