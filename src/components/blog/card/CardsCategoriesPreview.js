import BlogCard from "./BlogCard"

function CardsCategoriesPreview({articleInfo}){
    return(
        <div id='blog-cards-categories'>
            {
                Object.keys(articleInfo).map((a,i) => {
                    return( 
                        <div key={i}>
                            <h1>{a}</h1>
                            <div className='blog-cards-row'>
                                {
                                    articleInfo[a].slice(0, 3).map((a,i) => {
                                        return <BlogCard 
                                        key={i}
                                        imgURL={a.urlToImage}
                                        title={a.title}
                                        date={a.publishedAt}
                                        content={a.description}
                                        id={i}
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