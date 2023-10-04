import './landingPage.css'
import { useEffect } from 'react';
import SketchButton from './SketchButton';
import getCurrentUser from '../../utils/getCurrentUser';


function LandingPage(){
    const urlParams = new URLSearchParams(window.location.search)

    useEffect(() => {
        if (urlParams.get('mode') === 'resetPassword') window.location.href = '/login?mode=reset&code=' + urlParams.get('oobCode') 
        
        const userInfo = getCurrentUser()
        if (userInfo) window.location.href = '/home'
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div id="landing-page">
            <div id="hero-content">
                <div id="hero-text">
                    <div id="hero-logo-display">
                        <img src={process.env.PUBLIC_URL + '/assets/hero-logo.svg'} alt="logo"></img>
                        <h1>Locatia</h1>
                    </div>
                    <h1>Connecting individuals seeking companionship and memorable experiences.</h1>
                    <h2>Our platform empowers people to share their time and talents while also offering the opportunity to create meaningful connections and unforgettable moments. Join us today and embark on a journey of companionship and shared adventures.</h2>
                    <SketchButton onClick={() => document.location.href = "/login"} text={"Get Started →"} />
                </div>
                <img id="hero-image" src={process.env.PUBLIC_URL + '/assets/hero.png'} alt="hero"></img>
            </div>
        </div>
    )
}

export default LandingPage;