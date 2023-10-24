import './blog-cards.css'
import { useEffect, useState } from "react"
// TODO: what is this one used for?
import redirectFromCard from '../../utils/redirectFromCard'
import getImageFromStorage from '../../firebase-utils/query/getImageFromStorage'
// TODO import query file of blogs


function BlogCard({ blogInfo, bid }){
    const [bri, setBri] = useState('')
    // TODO: the '' doesn't make a difference, right?
    const [blogname, setBlogname] = useState('')

    useEffect(() => {
        const asd = async () => {
            // TODO: The path to get the image is just the one I belive it will look like in the db
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
    
    // TODO: make images scroll when mouse is hovering
    return (
        // TODO: add formating to the css file
        // How does the redirectFromCard work?
        <div className="blog-card" onClick={(e) => redirectFromCard(e, blogname) }>
            <img src={bri} alt={blogInfo.name} id="blog-image"></img>
            <h3>{blogInfo.name}</h3>
            <p>{blogInfo.summary}</p>
        </div>
    )
}

export default BlogCard