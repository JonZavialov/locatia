import React, { useEffect, useState, useRef } from 'react'
import NavBar from '../../navBar/NavBar'
import CopyrightFooter from '../../footer/Footer'
import "./blogcards.css"
import { blogData } from '../mockdata'
import BlogCard from './BlogCard'
import Fuse from 'fuse.js'

function BlogCardsDisplay() {
    const [articles, setArticles] = useState([])
    const [filteredArticles, setFilteredArticles] = useState([])
    const searchBar = useRef(null)
    
    useEffect(()=>{
        // call data from api
        // const fetchData = async() => {
        //    let res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=c063629114c04f3db4fa60a1b24e8ac3")
        //    let response = res.data.articles
        //    setArticles(response)
        // }
        // fetchData()
        setArticles(blogData)
        setFilteredArticles(blogData)
    }, [])

    function searchName(name){
      if (!name) {
        setFilteredArticles(articles)
        return
      }

      const fuse = new Fuse(articles, {
        keys: ['title', 'description'],
        threshold: 0.5
      })
      setFilteredArticles(fuse.search(name).map(a => a.item))
    }

  return (
    <>
      <NavBar />
      <div id="blog-cards-page-container">
        <input type="text" id="blog-search-bar" placeholder="Search for a blog" ref={searchBar} onChange={() => searchName(searchBar.current.value)} />
        <div id='blog-cards-collection'>
          {
            filteredArticles.map((a,i) => {
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
      <CopyrightFooter />
    </>
  )
}

export default BlogCardsDisplay