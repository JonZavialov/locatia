import { useParams } from "react-router-dom"
import getProfileFromUser from "../../firebase-utils/query/getProfileFromUser";
import { useEffect, useState } from "react";
import ProfilePage from "./ProfilePage";
import "./profilePage.css";
import NavBar from "../navBar/NavBar";

function ProfilePageContainer(){
    const { username } = useParams();
    const [data, updateData] = useState('');
    const [uuid, updateUUID] = useState('');

    useEffect(() => {
        const getData = () => {
            getProfileFromUser(username)
            .then(({profile, uuid}) => {
                updateData(profile);
                updateUUID(uuid);
            })
            .catch(() => {
                window.location.href = '/404';
            })
        }
        getData();
    }, [username]);

    return (
        <>
            <NavBar />
            <div id="profile-page-container">
                <div id="profile-page">
                    {
                        !data && <p>Loading...</p>}
                    {
                        data && <ProfilePage data={data} uuid={uuid} />
                    }
                </div>
            </div>
        </>
    )
}

export default ProfilePageContainer