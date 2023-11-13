import AccountIndicator from './AccountIndicator';
import ExpandedSearchForm from './ExpandedSearchForm';
import './navBar.css';
import { useState } from 'react';


function NavBar(){
    const [isSearchFormExpanded, setIsSearchFormExpanded] = useState(false);
    
    return(
        <div id="nav-bar">
            <div id="logo" onClick={() => window.location.href = ('/home')}>
                <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt="logo" id="logo" />
                <h1>Locatia</h1>
            </div>
            <div id="search-form">
                <div id="search-form-banner" onClick={() => setIsSearchFormExpanded(!isSearchFormExpanded)}>
                    <p>Any time</p>
                    <p>Any tags</p>
                    <p>Anywhere</p>
                    <i style={{'color': '#6029a1'}} className="fa fa-search" aria-hidden="true"></i>
                </div>
                <ExpandedSearchForm isSearchFormExpanded={isSearchFormExpanded}/>
            </div>
            <div id="navbar-links">
                <a href="/">ABOUT</a>
                <a href="/contact">CONTACT</a>
                <a href="/faq">FAQ</a>
                <a href="/blogs">BLOGS</a>
            </div>
            <AccountIndicator />
        </div>
    )
}

export default NavBar;
