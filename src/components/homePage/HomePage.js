import getProfiles from "../../firebase-utils/query/getProfiles"
import { useEffect, useState } from "react"
import ProfileCardsContainer from "./ProfileCardsContainer";
import getSearchResults from "../../utils/getSearchResults";
import CopyrightFooter from '../footer/Footer'
import NavBar from "../navBar/NavBar";

function HomePage(){
    const [data, updateData] = useState();
    const queryParameters = new URLSearchParams(window.location.search)

    useEffect(() => {   
        const getData = async () => {
            const profiles = await getProfiles();
            if (queryParameters.get('search'))
                updateData(getSearchResults(queryParameters.get('search'), profiles))
            else if (queryParameters.get('zip'))
                updateData(addProximityToProfiles(queryParameters.get('zip'), profiles))
            else updateData(profiles);
        }
        getData();
    // TODO: fix
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            < NavBar />
            {data && <ProfileCardsContainer data={data} sort={queryParameters.get('zip') ? 'proximity' : 'timestamp'} />}
            <CopyrightFooter />
        </>
    )
}

function addProximityToProfiles(zipcode, data){
    for (const key in data){
        data[key].proximity = -Math.abs(data[key].zip - zipcode) // Negative so that it sorts in ascending order
    }
    return data
}

export default HomePage