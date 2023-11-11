import React from 'react'
import { useNavigate } from 'react-router-dom'


function BlogCard({id, imgURL, title, date, content, page}) {
    const navigate = useNavigate()
    let publishedDate = new Date(date)
  return (
    <div className='card-body' onClick={()=>navigate(`/blog/${page}/${id}`)}>
        <img className="blog-img" src={imgURL} alt="blog" />
        <h3 className='card-title'>{title}</h3>
        <p>{publishedDate.getMonth()+1}/{publishedDate.getDate()}/{publishedDate.getFullYear()}</p>
        <p>{content}</p>
    </div>
  )
}

export default BlogCard