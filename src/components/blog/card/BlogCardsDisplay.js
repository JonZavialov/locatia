import React, { useState, useRef } from 'react'
import NavBar from '../../navBar/NavBar'
import CopyrightFooter from '../../footer/Footer'
import "./blogcards.css"
import { useParams } from 'react-router-dom'
import SearchCards from './SearchCards'
import CardsCategoriesPreview from './CardsCategoriesPreview'
import CategoryCards from './CategoryCards'

const categories = {
  "personal-stories": "Personal Stories",
  "tips-and-advice": "Tips & Advice",
  "misc": "Miscellaneous"
}

function BlogCardsDisplay() {
    const [searchTerm, setSearchTerm] = useState('')
    const searchBar = useRef(null)
    let { category } = useParams(); // Undefined if no category

    return (
      <>
        <NavBar />
        <div id="blog-cards-page-container">
          <div id="categories-selector">
            <a href="/blogs/personal-stories" className={categories[category] === "Personal Stories" ? 'selected': ''}>Personal Stories</a>
            <a href="/blogs/tips-and-advice" className={categories[category] === "Tips & Advice" ? 'selected': ''}>Tips & Advice</a>
            <a href="/blogs/misc" className={categories[category] === "Miscellaneous" ? 'selected': ''}>Miscellaneous</a>
          </div>
          {
            category ?
              <CategoryCards category={category} />
            :
              <>
                <input type="text" id="blog-search-bar" placeholder="Search for a blog" ref={searchBar} onChange={() => setSearchTerm(searchBar.current.value)} />
                {
                  searchTerm ? 
                    <SearchCards name={searchTerm} />
                  :
                    <CardsCategoriesPreview />
                }
              </>
          }
        </div>
        <CopyrightFooter />
      </>
    )
}

export default BlogCardsDisplay