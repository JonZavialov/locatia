import './landingPage.css'
import { useEffect } from 'react';
import SketchButton from './SketchButton';
import getCurrentUser from '../../utils/getCurrentUser';

function LandingPage(){
    const urlParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        if (urlParams.get('mode') === 'resetPassword') window.location.href = '/login?mode=reset&code=' + urlParams.get('oobCode') 
        
        const userInfo = getCurrentUser()
        if (userInfo) window.location.href = '/home'
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
            <img src={process.env.PUBLIC_URL + '/assets/hero.png'} alt="hero" id="hero-image"></img>
        </div>
    )
}

export default LandingPage;