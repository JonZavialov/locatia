import React from 'react'
import { useNavigate } from 'react-router-dom'


function BlogCard({ id, imgURL, title, date, content }) {
  const navigate = useNavigate()
  let publishedDate = new Date(date)
  
  return (
    <div className='card-body' onClick={()=>navigate(`/blog/${id}`)}>
      <img className="blog-img" src={imgURL} alt="blog" />
      <h3 className='card-title'>{title}</h3> {/* Max length 60 */}
      <p className="card-date">{publishedDate.getMonth()+1}/{publishedDate.getDate()}/{publishedDate.getFullYear()}</p>
      <p id="blog-card-content">{content}</p> {/* Max length 112 */}
    </div>
  )
}

export default BlogCard
