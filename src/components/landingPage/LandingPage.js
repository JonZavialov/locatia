import './landingPage.css'
import getImageFromStorage from '../../firebase-utils/query/getImageFromStorage';
import { useEffect, useState } from 'react';
import SketchButton from './SketchButton';

function LandingPage(){
    const [uri, setUri] = useState('')
    const urlParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        if (urlParams.get('mode') === 'resetPassword') window.location.href = '/login?mode=reset&code=' + urlParams.get('oobCode') 
        
        const asd = async () => {
            const response = await getImageFromStorage('/assets/hero.png')
            setUri(response);
        };
        asd()
    // TODO: fix
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div id="landing-page">
            <div id="hero-text">
                <h1>Empowering college athletes to showcase their game, one brand partnership at a time</h1>
                <h2>Bridge the gap between college athletes and top brands, creating meaningful partnerships that elevate both parties and celebrate the spirit of competition.</h2>
                <SketchButton onClick={() => document.location.href = "/login"} text={"Get Started →"} />
            </div>
            {uri && <img src={uri} alt="hero" id="hero-image"></img>}
        </div>
    )
}

export default LandingPage;