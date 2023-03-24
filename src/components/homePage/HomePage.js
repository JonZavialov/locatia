import getProfiles from "../../firebase-utils/getProfiles"
import { useEffect, useState } from "react"
import ProfileCardsContainer from "./ProfileCardsContainer";

function HomePage(){
    const [data, updateData] = useState();

    useEffect(() => {
        const getData = async () => {
            updateData(await getProfiles());
        }
        getData();
    }, []);

    return data && <ProfileCardsContainer data={data} />
}

export default HomePage