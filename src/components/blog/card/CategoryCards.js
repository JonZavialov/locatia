import { useEffect, useState } from "react"
import BlogCard from './BlogCard'
import sendReqToBackend from "../../../backend-utils/sendReqToBackend"

function CategoryCards({ category }){
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        sendReqToBackend(`blogs`)
        .then(res => JSON.parse(res))
        .then(data => {
            console.log(data)
            setArticles(data[category])
        })
        .catch(err => console.log(err))
    }, [category])

    return (
        <div id="blog-cards-search">
            {
                articles.map((a,i) => {
                    return <BlogCard 
                    key={i}
                    title={a.title}
                    date={new Date().toISOString()}
                    content={a.desc}
                    id={a.id}
                    category={a.category}
                    />
                })
            }
        </div>
    )
}

export default CategoryCards
