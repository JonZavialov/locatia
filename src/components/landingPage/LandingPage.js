import './landingPage.css'
import getImageFromStorage from '../../firebase-utils/query/getImageFromStorage';
import { useEffect, useState } from 'react';
import SketchButton from './SketchButton';
import getCurrentUser from '../../utils/getCurrentUser';

function LandingPage(){
    const [uri, setUri] = useState('')
    const urlParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        if (urlParams.get('mode') === 'resetPassword') window.location.href = '/login?mode=reset&code=' + urlParams.get('oobCode') 
        
        const userInfo = getCurrentUser()
        if (userInfo) window.location.href = '/home'

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
                <h1>Elevate your social life with paid meetups and unique experiences.</h1>
                <h2>Enjoy the company of others today through paid meetups.</h2>
                <SketchButton onClick={() => document.location.href = "/login"} text={"Get Started →"} />
            </div>
            {uri && <img src={uri} alt="hero" id="hero-image"></img>}
        </div>
    )
}

export default LandingPage;