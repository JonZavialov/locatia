import './blog-cards.css'
import { useEffect, useState } from "react"
// TODO: what is this one used for?
import redirectFromCard from '../../utils/redirectFromCard'
import getImageFromStorage from '../../firebase-utils/query/getImageFromStorage'
// TODO import query file of blogs


function BlogCard({ blogInfo, bid }){
    const [bri, setBri] = useState()
    // TODO: the '' doesn't make a difference, right?
    const [blogname, setBlogname] = useState('')

    const [blogsummary, setBlogSum] = useState()

    useEffect(() => {
        const asd = async () => {
            // TODO: I have this random path to get the image of the blog, but where would they be stored?
            const response = await getImageFromStorage(`blogs/${bid}/1.png`)
            setBri(response);
        };
        asd()
    }, [bid])


    useEffect(() => {
        const asd = async () => {
            // TOOD: need to implement a getBlogFromUUID
            //const user = await getUserFromUUID(uuid)
            const blog = await getBlogFromBID(bid)
            setBlogname(blog)
        }
        asd()
    }, [bid])

    useEffect(() => {
        const asd = async () => {
            // TOOD: implement getBlogSummaryFromBID
            const blogSum = await getBlogSummaryFromBID(bid)
            setBlogSum(blog)
        }
        asd()
    }, [bid])
    
    // TODO: make images scroll when mouse is hovering
    return (
        <div className="blog-card" onClick={(e) => redirectFromCard(e, blogname) }>
            <img src={bri} alt={blogInfo.name} id="blog-image"></img>
            <h3>{blogInfo.name}</h3>
            <p>{blogInfo.summary}</p>
        </div>
    )
}

export default BlogCard