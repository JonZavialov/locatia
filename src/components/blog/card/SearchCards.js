import { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import Fuse from 'fuse.js'

function SearchCards({ articleInfo, name }){
    const [filteredArticles, setFilteredArticles] = useState([])

    useEffect(() => {
      // Need to combine all articles into one array
      let combinedArticles = []
      Object.keys(articleInfo).forEach(key => {
        combinedArticles = combinedArticles.concat(articleInfo[key])
      })
      const fuse = new Fuse(combinedArticles, {
        keys: ['title', 'description'],
        threshold: 0.5
      })
      setFilteredArticles(fuse.search(name).map(a => a.item))
    }, [name, articleInfo])
    
    return (
        <div id="blog-cards-search">
            {
                filteredArticles.map((a,i) => {
                    return <BlogCard 
                    key={i}
                    imgURL={a.urlToImage}
                    title={a.title}
                    date={a.publishedAt}
                    content={a.description}
                    id={a.id}
                    category={a.category}
                    />
                })
            }
        </div>
    )
}

export default SearchCards