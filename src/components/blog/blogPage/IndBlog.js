import './indblog.css';
import NavBar from '../../navBar/NavBar';
import CopyrightFooter from '../../footer/Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sendReqToBackend from '../../../backend-utils/sendReqToBackend';

function IndBlog() {
    const { id, category } = useParams();
    const [blog, setBlog] = useState({})

   
    useEffect(() => {
        sendReqToBackend(`blogs/${category}/${id}`)
        .then(res => {
            const data = JSON.parse(res)
            setBlog(data)
        })
    }, [id, category]);

    return (
        <>
            <NavBar />
            {
                !blog.title ? <h1 id="blog-not-found">Blog not found!</h1> :
                <div id='ind-blog-container'>
                    <img src={`https://api.locatia.co/blogs/image/${id}`} alt="blog" />
                    <p id='ind-blog-title'>{blog.title}</p>
                    <p id='ind-blog-pubdate'>
                        <span>Published </span> 
                        {new Date().toDateString()}
                    </p>
                    <div id='ind-blog-content'>
                        {
                            blog.content.split('\n').map((p, i) => {
                                return <p key={i}>{p}</p>
                            })
                        }
                    </div>
                </div>
            }
            <CopyrightFooter />
        </>
    );
}

export default IndBlog
