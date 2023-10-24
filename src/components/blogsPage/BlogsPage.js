
// TODO need ot greate a js file in the queries folder to get the blogs and import it here
//import getProfiles from "../../firebase-utils/query/getProfiles"
import { useEffect, useState } from "react"
import ProfileCardsContainer from "./BlogCardsContainer";
import getSearchResults from "../../utils/getSearchResults";
import CopyrightFooter from '../footer/Footer'
import NavBar from "../navBar/NavBar";
import BlogCardsContainer from "./BlogCardsContainer";

function BlogPage(){
    const [data, updateData] = useState();
    // TODO: This is just the parameters that we want to use when deciding what data to show?
    const queryParameters = new URLSearchParams(window.location.search)

    useEffect(() => {   
        // TODO: This just gets the data that we want to show into getData?
        const getData = async () => {
            // create getBlogs() query
            const blogs = await getBlogs();
            if (queryParameters.get('search'))
                updateData(getSearchResults(queryParameters.get('search'), blogs))
            else updateData(blogs);
        }

        getData();
    // TODO: fix
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // The BlogPage should return the navBar, with the blog cards, and the footer
    return (
        <>
            < NavBar />
            {data && <BlogCardsContainer data={data} sort='timestamp'/>}
            <CopyrightFooter />
        </>
    )
}

// TODO: figure out where you will be calling the BlogPage (no need for the proximity function)

export default BlogPage