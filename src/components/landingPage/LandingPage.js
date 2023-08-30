import './landingPage.css'
import { useEffect, useState, useRef } from 'react';
import SketchButton from './SketchButton';
import getCurrentUser from '../../utils/getCurrentUser';

function LandingPage(){
    const [heroImage, setHeroImage] = useState('hero-1.png')
    const heroImgRef = useRef(null);
    const urlParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        if (urlParams.get('mode') === 'resetPassword') window.location.href = '/login?mode=reset&code=' + urlParams.get('oobCode') 
        
        const userInfo = getCurrentUser()
        if (userInfo) window.location.href = '/home'
        
        const images = ['hero-1.png', 'hero-2.png', 'hero-3.png', 'hero-4.png']
        let i = 0;
        const changeImage = () => setTimeout(() => {
            if (i === images.length-1) i = 0;
            else i++; //TODO: Refactor to use modulo division

            heroImgRef.current.style.opacity = 0;
            setTimeout(() => {
                setHeroImage(images[i]);
                heroImgRef.current.style.opacity = 1;
                setTimeout(() => 
                    changeImage()
                , 500)
            }, 500)
        }, 5000)
        changeImage();
        
    // TODO: fix
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div id="landing-page">
            <div id="hero-text">
                <div id="hero-logo-display">
                    <img src={process.env.PUBLIC_URL + '/assets/hero-logo.svg'} alt="logo"></img>
                    <h1>Locatia</h1>
                </div>
                <h1>Elevate your social life with paid meetups and unique experiences.</h1>
                <h2>Join paid meetups with like-minded people to enjoy fun activities and earn money. Swap dull nights at home for thrilling experiences and new connections.</h2>
                <SketchButton onClick={() => document.location.href = "/login"} text={"Get Started →"} />
            </div>
            <img src={process.env.PUBLIC_URL + `/assets/${heroImage}`} alt="hero" id="hero-image" ref={heroImgRef}></img>
        </div>
    )
}

export default LandingPage;