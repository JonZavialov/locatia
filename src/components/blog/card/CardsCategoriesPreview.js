import { useState } from "react"
import BlogCard from "./BlogCard"
import { useEffect } from "react"
import sendReqToBackend from "../../../backend-utils/sendReqToBackend"

const categories = {
  "personal-stories": "Personal Stories",
  "tips-and-advice": "Tips & Advice",
  "misc": "Miscellaneous"
}

function CardsCategoriesPreview(){
    const [articleInfo, setArticleInfo] = useState([])

    useEffect(() => {
        sendReqToBackend('blogs/oftheday')
        .then(res => {
            const data = JSON.parse(res)
            setArticleInfo(data)
        })
        .catch(err => console.log(err))
    }, [])
    
    return(
        <div id='blog-cards-categories'>
            {
                Object.keys(articleInfo).map((a,i) => {
                    return( 
                        <div key={i}>
                            <h1>{categories[a]}</h1>
                            <div className='blog-cards-row'>
                                {
                                    articleInfo[a].map((b,i) => {
                                        return <BlogCard 
                                        key={i}
                                        title={b.title}
                                        date={new Date().toISOString()} // TODO: fix
                                        content={b.desc}
                                        id={b.id}
                                        category={b.category}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardsCategoriesPreview