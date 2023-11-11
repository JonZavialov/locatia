import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../navBar/NavBar'
import CopyrightFooter from '../footer/Footer'
import "./blogpage.css"
import BlogCard from './BlogCard'
import { useNavigate } from "react-router-dom";
import Loading from '../loading/Loading'
import { mockData2 } from './mockData2'

function BlogPage() {
    const [articles,setArticles] = useState([])
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(0)
    const loader = useRef(null)

    const totalPage = mockData2.length

    useEffect(()=>{
        setLoading(loading => !loading)
        // console.log("start loading")
        // setArticles(blogData)
        setArticles(mockData2[page])
        setTimeout(() => setLoading(loading => !loading),1000)
        // setLoading(loading => !loading)
        // console.log("finish loading")
    },[page])

    // useEffect(() => {
    //   const option = {
    //     root: null,
    //     rootMargin: "10px",
    //     threshold: 0
    //   };
    //   const observer = new IntersectionObserver(handleObserver, option);
    //   if (loader.current) observer.observe(loader.current);
    // }, [handleObserver]);

    const changePage = (page) => {
      setPage(prev => page)
      window.scrollTo(0, 0)
    }

  return (
    <>
    <NavBar />
    <div className='blogs-page'>
        <h2 className='page-title'>Blogs</h2>
        {loading ? <Loading /> : <div className='blogs-container'>
            {articles.map((a,i) => {
            return <BlogCard key={i}
            imgURL={a.urlToImage}
            title={a.title}
            date={a.publishedAt}
            content={a.content}
            id={i}
            page={page}
            //    onClick={()=>navigate(``)}
            />
            })}
        </div>}
        {/* <div ref={loader} /> */}
        <div className='page-index-menu'>
        {[...Array(totalPage).keys()].map(i => {
          if (i == page)
          {
            return <div onClick={()=>changePage(i)} className='page-index selected'>{i+1}</div>
          }
          return <div onClick={()=>changePage(i)} className='page-index'>{i+1}</div>
        })}
       </div>
    </div>
    <CopyrightFooter />
    </>
  )
}

export default BlogPage