import { useParams } from "react-router-dom"
import getProfileFromUser from "../../firebase-utils/query/getProfileFromUser";
import { useEffect, useState } from "react";
import ProfilePage from "./ProfilePage";
import "./profilePage.css";

function ProfilePageContainer(){
    const { username } = useParams();
    const [data, updateData] = useState('');

    useEffect(() => {
        const getData = async () => {
            updateData(await getProfileFromUser(username)
                .catch(() => {
                    window.location.href = '/404';
                })
            );
        }
        getData();
    }, [username]);

    return (
        <div id="profile-page-container">
            <div id="profile-page">
                {
                    !data && <p>Loading...</p>}
                {
                    data && <ProfilePage data={data} />
                }
            </div>
        </div>
    )
}

export default ProfilePageContainer