import { useParams } from "react-router-dom"
import getProfileFromUser from "../../firebase-utils/query/getProfileFromUser";
import { useEffect, useState } from "react";

function ProfilePage(){
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
        <>
            {
                !data && <p>Loading...</p>}
            {
                data && <p>{data.username}</p>
            }
        </>
    )
}

export default ProfilePage