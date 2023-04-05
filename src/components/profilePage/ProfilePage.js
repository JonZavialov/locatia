import getImageListFromUUID from "../../firebase-utils/query/getImageListFromUUID";
import ProfileBanner from "./ProfileBanner";
import "./profilePage.css";
import Carousel from "./Carousel";
import { useState, useEffect, useMemo } from "react";
import SocialsBox from "../homePage/SocialsBox";
import clickedContact from "../../utils/clickedContact";
import getImageFromRef from "../../firebase-utils/query/getImageFromRef";

function ProfilePage({ data, uuid }){    
    const imageList = useMemo(() => [], [])
    const [numImages, setNumImages] = useState(0)
    const [reRender, setReRender] = useState(false)
    // TODO: there's definitely a better way to do this but i am very stupid

    useEffect(() => {
        getImageListFromUUID(uuid)
        .then((imageRefList) => {
            setNumImages(imageRefList.length)
            imageRefList.forEach((imageRef) => {
                getImageFromRef(imageRef)
                .then((uri) => {
                    imageList.push(uri)
                })
            })
        })
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [imageList, uuid])

    return (
        <>
            <h1>{data.name}</h1>
            <ProfileBanner data={data} />
            <div id="gallery-contacts">
                {imageList.length === 0 && 'Loading...'}
                {imageList.length === numImages && <Carousel images={imageList} name={data.name}/>}
                <div id="contact-area">
                    <SocialsBox display={'Connect'} clickFunc={clickedContact} />     
                </div>
            </div>
            <hr />
            <h2>About</h2>
            <p>{data.bio}</p>
            <button onClick={() => {
                console.log(imageList)
                setReRender(!reRender)
            }}>Test</button>
        </>
    )
}

// TODO: line 27 can be changed later

export default ProfilePage;