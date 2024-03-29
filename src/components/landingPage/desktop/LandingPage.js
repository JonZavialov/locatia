import './landingPage.css'
import { useEffect } from 'react';
import CopyrightFooter from '../../footer/Footer';
import Marquee from "react-fast-marquee";
import HowItWorks from '../../howItWorks/HowItWorks';
import LandingPageMobile from '../mobile/LandingPageMobile';

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

function LandingPage(){
    const urlParams = new URLSearchParams(window.location.search)

    useEffect(() => {
        if (urlParams.get('mode') === 'resetPassword') window.location.href = '/login?mode=reset&code=' + urlParams.get('oobCode') 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    if (window.innerWidth < 1000) return (
        <LandingPageMobile />
    )
    return (
        <>
            <div id="hero">
                <div id="hero-inner-container">
                    <div id="hero-text">
                        <div id="hero-logo">
                            <img src={process.env.PUBLIC_URL + '/assets/hero-logo.svg'} alt="logo"></img>
                            <h1>Locatia</h1>
                        </div>
                        <h1>Connecting individuals seeking companionship and memorable experiences.</h1>
                        <h2>Experience a transformative approach to social connections. Our platform is designed to help you break free from the isolation of the digital world. Connect with like-minded individuals, craft your ideal in-person interactions, and benefit from our innovative incentive model. Join us in redefining the way you form genuine relationships and find companionship.</h2>
                        <button onClick={() => document.location.href = "/login"}>Get Started →</button>
                    </div>
                    <img id="hero-image" src={process.env.PUBLIC_URL + '/assets/hero.svg'} alt="hero"></img>
                </div>
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
            <HowItWorks />
            <hr className="divider" />
            <div id="buyer-seller-desc">
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
            <CopyrightFooter />
        </>
    )
}

export default LandingPage;
