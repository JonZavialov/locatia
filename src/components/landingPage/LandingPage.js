import './landingPage.css'
import { useEffect, useState } from 'react';
import SketchButton from './SketchButton';
import getCurrentUser from '../../utils/getCurrentUser';


function LandingPage(){
    const urlParams = new URLSearchParams(window.location.search)
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (urlParams.get('mode') === 'resetPassword') window.location.href = '/login?mode=reset&code=' + urlParams.get('oobCode') 
        
        const userInfo = getCurrentUser()
        if (userInfo) window.location.href = '/home'
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div id="landing-page">
            <div id="hero-content" style={viewportWidth > 1000 ? {} : {
                margin: '10% 0 0'
            }}>
                <div id="hero-text" style={viewportWidth > 1000 ? {} : {
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: 'auto'
                }}>
                    <div id="hero-logo-display">
                        <img src={process.env.PUBLIC_URL + '/assets/hero-logo.svg'} alt="logo"></img>
                        <h1>Locatia</h1>
                    </div>
                    <h1>Connecting individuals seeking companionship and memorable experiences.</h1>
                    <h2>Our platform empowers people to share their time and talents while also offering the opportunity to create meaningful connections and unforgettable moments. Join us today and embark on a journey of companionship and shared adventures.</h2>
                    {viewportWidth > 1000 ? 
                        <SketchButton onClick={() => document.location.href = "/login"} text={"Get Started →"} />
                        :
                        <p id="mobile-p">Locatia is not yet available on mobile. Try us out on desktop!</p>
                    }
                </div>
                {viewportWidth > 1000 && <img id="hero-image" src={process.env.PUBLIC_URL + '/assets/hero.png'} alt="hero"></img>}
            </div>
        </div>
    )
}

export default LandingPage;