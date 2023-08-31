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
                    <h1>Form judgement-free connections.</h1>
                    <h2>Get unbiased opinions from complete strangers that think like you. Connect with empathetic listeners for meaningful conversations and guidance.</h2>
                    <SketchButton onClick={() => document.location.href = "/login"} text={"Get Started →"} />
                </div>
                <img id="hero-image" src={process.env.PUBLIC_URL + '/assets/hero.png'} alt="hero"></img>
            </div>
        </div>
    )
}

export default LandingPage;