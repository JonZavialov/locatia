import { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import Fuse from 'fuse.js'
import sendReqToBackend from '../../../backend-utils/sendReqToBackend'

function SearchCards({ name }){
    const [filteredArticles, setFilteredArticles] = useState([])
    const [articleInfo, setArticleInfo] = useState([])

    useEffect(() => {
      sendReqToBackend('blogs/')
      .then(res => {
          const data = JSON.parse(res)
          setArticleInfo(data)
      })
    }, [])

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

export default SearchCards