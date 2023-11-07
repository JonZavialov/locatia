import './indblog.css';
import NavBar from '../../navBar/NavBar';
import CopyrightFooter from '../../footer/Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { blogData } from '../mockdata';

function IndBlog() {
    const { id } = useParams();
    const [blog, setBlog] = useState({})
   
    useEffect(() => {
        // Write a query from the database here
        // getBlogFromTitle()
        setBlog(
            {
                title: blogData[id].title,
                image: blogData[id].urlToImage,
                bodyText: blogData[id].content,
                pubdate: new Date(blogData[id].publishedAt),
            }
        )
    }, [id]);

    return (
        <>
            <NavBar />
            {
                blog.title === undefined ? <h1 id="blog-not-found">Blog not found!</h1> :
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
