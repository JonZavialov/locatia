import './indblog.css';
import NavBar from '../navBar/NavBar';
import CopyrightFooter from '../footer/Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function indBlog() {
    const { title } = useParams();
    const [image, setImage] = useState('');
    const [bodytext, setBodyText] = useState('');
    const [pubdate, setPubDate] = useState('');

    useEffect(() => {
        // Write a query from the database here
        // getBlogFromTitle()
    }, [title]);

    return (
        <>
            <NavBar />
            {/* Need a div here for the body*/}
                {/* Here will hold the image (big image probably)*/}
                {/* publication date in small text here (font-size = 14px)*/}
                {/* Then the title here (thinking probably size 'h3') */}
                {/* Finally will be the body text */}
            {/* Close div */}
            <CopyrightFooter />
        </>
    );
}

export default indBlog