import './indblog.css';
import NavBar from '../navBar/NavBar';
import CopyrightFooter from '../footer/Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function indBlog() {
    const { title } = useParams();
    const [image, setImage] = useState('');
    const [bodytext, setBodyText] = useState('');

    useEffect(() => {
        // Write a query from the database here
        // getBlofFromTitle()
    }, [title]);

    return (
        <>
            <NavBar />
            <CopyrightFooter />
        </>
    );
}

export default indBlog