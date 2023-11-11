import './indblog.css';
import NavBar from '../../navBar/NavBar';
import CopyrightFooter from '../../footer/Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { blogData } from '../mockdata';

const categories = {
  "personal-stories": "Personal Stories",
  "tips-and-advice": "Tips & Advice",
  "misc": "Miscellaneous"
}

function IndBlog() {
    const { id, category } = useParams();
    const [blog, setBlog] = useState({})

   
    useEffect(() => {
        // Write a query from the database here
        // getBlogFromTitle()

        for(let blog of blogData[categories[category]]) {
            if(blog.id === id) {
                setBlog(
                    {
                        title: blog.title,
                        image: blog.urlToImage,
                        bodyText: blog.content,
                        pubdate: new Date(blog.publishedAt),
                    }
                )
                return
            }
        }

        setBlog(
            {
                title: undefined,
                image: undefined,
                bodyText: undefined,
                pubdate: new Date(),
            }
        )
    }, [id, category]);

    return (
        <>
            <NavBar />
            {
                !blog.title ? <h1 id="blog-not-found">Blog not found!</h1> :
                <div id='ind-blog-container'>
                    <img src={blog.image} alt="blog" />
                    <p id='ind-blog-title'>{blog.title}</p>
                    <p id='ind-blog-pubdate'>
                        <span>Published </span> 
                        {blog.pubdate.getMonth()+1}/{blog.pubdate.getDate()}/{blog.pubdate.getFullYear()}
                    </p>
                    <p id='ind-blog-content'>{blog.bodyText}</p>
                </div>
            }
            <CopyrightFooter />
        </>
    );
}

export default IndBlog
