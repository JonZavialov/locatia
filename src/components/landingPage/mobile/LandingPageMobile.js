import './landingpagemobile.css'
import { useEffect } from 'react';
import Marquee from "react-fast-marquee";

const bannerItems = [
    {
        image: '/assets/landingpage-banner/friends.png',
        title: 'Experience Companionship Today',
    },
    {
        image: '/assets/landingpage-banner/money.png',
        title: 'Earn Money While Making Connections',
    },
    {
        image: '/assets/landingpage-banner/computer.png',
        title: 'Forge Meaningful Connections Beyond the Screen',
    }
]
function LandingPageMobile(){
    const urlParams = new URLSearchParams(window.location.search)

    useEffect(() => {
        if (urlParams.get('mode') === 'resetPassword') window.location.href = '/login?mode=reset&code=' + urlParams.get('oobCode') 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div id="mobile-landing-page">
            <div id="hero-mobile">
                <div id="hero-logo-mobile">
                    <img src={process.env.PUBLIC_URL + '/assets/hero-logo.svg'} alt="logo"></img>
                    <h1>Locatia</h1>
                </div>
                <h1>Connecting individuals seeking companionship and memorable experiences.</h1>
                <h2>Experience a transformative approach to social connections. Our platform is designed to help you break free from the isolation of the digital world. Connect with like-minded individuals, craft your ideal in-person interactions, and benefit from our innovative incentive model. Join us in redefining the way you form genuine relationships and find companionship.</h2>
                <p>Locatia is not currently available on mobile. Try it on desktop, or check back later!</p>
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </div>
            <Marquee className="banner">
                {
                    bannerItems.map((item, index) => {
                        return (
                            <div className="banner-item" key={index}>
                                <img src={process.env.PUBLIC_URL + item.image} alt="banner"></img>
                                <h2>{item.title}</h2>
                            </div>
                        )
                    })
                }
            </Marquee>
            <div id="how-it-works-mobile">
                <h1>How It Works</h1>
                <iframe 
                    src="https://www.youtube.com/embed/JDI6OlDdpGU?si=2mANarzhpSpLYXxX" 
                    title="YouTube video player"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                />
            </div>
            <hr className="divider" />
            <div id="buyer-seller-desc-mobile">
                <div>
                    <h2>For Companion Seekers</h2>
                    <ul>
                        <li>Customize meetups to match your preferences</li>
                        <li>Chat and screen potential companions beforehand</li>
                        <li>Choose between virtual or in-person meetups</li>
                        <li>Decide on location, time, and activities for your ideal companionship</li>
                    </ul>
                </div>
                <div>
                    <h2>For Companions</h2>
                    <ul>
                        <li>Set your own schedule and availability</li>
                        <li>Set your own price per hour for your companionship</li>
                        <li>Accept meetups based on your preferences</li>
                        <li>Choose between online or in-person interactions based on your comfort</li>
                    </ul>
                </div>
            </div>
            {/* Add latest blogs here */}
        </div>
    )
}

export default LandingPageMobile;