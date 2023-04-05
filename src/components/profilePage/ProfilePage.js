import getImageListFromUUID from "../../firebase-utils/query/getImageListFromUUID";
import ProfileBanner from "./ProfileBanner";
import "./profilePage.css";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import SocialsBox from "../homePage/SocialsBox";
import clickedContact from "../../utils/clickedContact";
import getImageListFromRefList from "../../utils/getImageListFromRefList";

function ProfilePage({ data, uuid }){
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
            <ProfileBanner data={data} />
            <div id="gallery-contacts">
                {!images && 'Loading...'}
                {images && <Carousel images={images} name={data.name}/>}
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

// TODO: line 27 can be changed later

export default ProfilePage;