import getProfiles from "../../firebase-utils/query/getProfiles"
import { useEffect, useState } from "react"
import ProfileCardsContainer from "./ProfileCardsContainer";
import CopyrightFooter from '../footer/Footer'
import NavBar from "../navBar/NavBar";
import applyFiltersToProfiles from "../../utils/applyFiltersToProfiles";

function HomePage({ search }){
    const [data, updateData] = useState();
    const queryParameters = new URLSearchParams(window.location.search)

    useEffect(() => {
        const getData = async () => {
            const profiles = await getProfiles();
            if (search) updateData(applyFiltersToProfiles(profiles, queryParameters));
            else updateData(profiles);
        }
        getData();
    // TODO: fix
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <NavBar />
            {data && <ProfileCardsContainer data={data} sort={queryParameters.get('zip') && queryParameters.get('zip') !== '0' ? 'proximity' : 'timestamp'} />}
            <CopyrightFooter />
        </>
    )
}

export default HomePage
