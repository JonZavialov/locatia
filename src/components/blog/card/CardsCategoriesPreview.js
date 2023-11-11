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
                                    articleInfo[a].slice(0, 3).map((b,i) => {
                                        return <BlogCard 
                                        key={i}
                                        imgURL={b.urlToImage}
                                        title={b.title}
                                        date={b.publishedAt}
                                        content={b.description}
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