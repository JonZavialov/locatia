import React, { useEffect, useState, useRef } from 'react'
import NavBar from '../../navBar/NavBar'
import CopyrightFooter from '../../footer/Footer'
import "./blogcards.css"
import { blogData } from '../mockdata'
import { useParams } from 'react-router-dom'
import SearchCards from './SearchCards'
import CardsCategoriesPreview from './CardsCategoriesPreview'
import BlogCard from './BlogCard'

const categories = {
  "personal-stories": "Personal Stories",
  "tips-and-advice": "Tips & Advice",
  "misc": "Miscellaneous"
}

function BlogCardsDisplay() {
    const [articleInfo, setArticleInfo] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const searchBar = useRef(null)
    let { category } = useParams(); // Undefined if no category

    useEffect(()=>{
        // call data from api
        // const fetchData = async() => {
        //    let res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=c063629114c04f3db4fa60a1b24e8ac3")
        //    let response = res.data.articles
        //    setArticles(response)
        // }
        // fetchData()
        setArticleInfo(blogData)
    }, [])

    return (
      <>
        <NavBar />
        <div id="blog-cards-page-container">
          <div id="categories-selector">
            <a href="/blog/personal-stories" className={categories[category] === "Personal Stories" ? 'selected': ''}>Personal Stories</a>
            <a href="/blog/tips-and-advice" className={categories[category] === "Tips & Advice" ? 'selected': ''}>Tips & Advice</a>
            <a href="/blog/misc" className={categories[category] === "Miscellaneous" ? 'selected': ''}>Miscellaneous</a>
          </div>
          {
            category && articleInfo.length !== 0 ?
              <div id="blog-cards-search">
                {
                  articleInfo[categories[category]].map((a,i) => {
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
            :
              <>
                <input type="text" id="blog-search-bar" placeholder="Search for a blog" ref={searchBar} onChange={() => setSearchTerm(searchBar.current.value)} />
                {
                  searchTerm ? 
                    <SearchCards name={searchTerm} articleInfo={articleInfo} />
                  :
                    <CardsCategoriesPreview articleInfo={articleInfo} />
                }
              </>
          }
        </div>
        <CopyrightFooter />
      </>
    )
}

export default BlogCardsDisplay