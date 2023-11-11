import React from 'react'
import { useNavigate } from 'react-router-dom'

const categories = {
  "Personal Stories": "personal-stories",
  "Tips & Advice": "tips-and-advice",
  "Miscellaneous": "misc"
}

function BlogCard({ id, imgURL, title, date, content, category }) {
  const navigate = useNavigate()
  let publishedDate = new Date(date)
  
  return (
    <div className='card-body' onClick={()=>navigate(`/blogs/${categories[category]}/${id}`)}>
      <img className="blog-img" src={imgURL} alt="blog" />
      <h3 className='card-title'>{title}</h3>
      <p className="card-date">{publishedDate.getMonth()+1}/{publishedDate.getDate()}/{publishedDate.getFullYear()}</p>
      <p id="blog-card-content">{content}</p>
    </div>
  )
}

export default BlogCard
