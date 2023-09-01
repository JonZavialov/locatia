import getProfiles from "../../firebase-utils/query/getProfiles"
import { useEffect, useState } from "react"
import ProfileCardsContainer from "./ProfileCardsContainer";
import getSearchResults from "../../utils/getSearchResults";
import CopyrightFooter from '../Footer'
import NavBar from "../navBar/NavBar";

function HomePage(){
    const [data, updateData] = useState();
    const queryParameters = new URLSearchParams(window.location.search)

    useEffect(() => {   
        const getData = async () => {
            const profiles = await getProfiles();
            if (queryParameters.get('search'))
                updateData(getSearchResults(queryParameters.get('search'), profiles))
            else updateData(profiles);
        }
        getData();
    // TODO: fix
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            < NavBar search={queryParameters.get('search')} />
            {data && <ProfileCardsContainer data={data} />}
            <CopyrightFooter />
        </>
    )
}

export default HomePage