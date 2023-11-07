import React, { useEffect, useState } from 'react'
import NavBar from '../../navBar/NavBar'
import CopyrightFooter from '../../footer/Footer'
import "./blogpage.css"
import { blogData } from '../mockdata'
import BlogCard from './BlogCard'
import { useNavigate } from "react-router-dom";

function BlogPage() {
    const [articles,setArticles] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        // call data from api
        // const fetchData = async() => {
        //     let res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=c063629114c04f3db4fa60a1b24e8ac3")
        //     let response = res.data.articles
        //     setArticles(response)
        // }
        // fetchData()
        setArticles(blogData)
    },[])

  return (
    <>
    <NavBar />
    <div className='blogs-page'>
        <h2 className='page-title'>Blogs</h2>
        <div className='blogs-container'>
            {articles.map((a,i) => {
            return <BlogCard key={i}
            imgURL={a.urlToImage}
            title={a.title}
            date={a.publishedAt}
            content={a.content}
            id={i}
            //    onClick={()=>navigate(``)}
            />
            })}
        </div>
    </div>
    <CopyrightFooter />
    </>
  )
}

export default BlogPage