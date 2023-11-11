import './indblog.css';
import NavBar from '../navBar/NavBar';
import CopyrightFooter from '../footer/Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { mockData2 } from '../blogPage/mockData2';

function IndBlog() {
    const { page,id } = useParams();
    const [blog,setBlog] = useState({
        title:"",
        image:"",
        bodyText:"",
        pubdate: "",
        pubdate1:new Date()
    })
   
    useEffect(() => {
        // Write a query from the database here
        // getBlogFromTitle()
        setBlog(
            {
                title:mockData2[page][id].title,
                image:mockData2[page][id].urlToImage,
                bodyText:mockData2[page][id].content,
                pubdate:mockData2[page][id].publishedAt,
                pubdate1:new Date(mockData2[page][id].publishedAt),
            }
        )
        window.scrollTo(0, 0)
    }, []);

    // let date = blog.pubdate

    return (
        <>
            <NavBar />
            {/* Need a div here for the body*/}
            {/* Close div */}
            <div className='indBlog-container'>
                 {/* Here will hold the image (big image probably)*/}
                <img src={blog.image} className='indBlog-img'/>
                {/* publication date in small text here (font-size = 14px)*/}
                <p className='indBlog-dateText'><span className='published-text'>Published:</span> 
                {blog.pubdate1.getMonth()+1}/{blog.pubdate1.getDate()}/{blog.pubdate1.getFullYear()}
                </p>
                {/* Then the title here (thinking probably size 'h3') */}
                <p className='indBlog-title'>{blog.title}</p>
                {/* Finally will be the body text */}
                <p className='indBlog-bodytext'>{blog.bodyText}</p>
            </div>
            <CopyrightFooter />
        </>
    );
}

export default IndBlog