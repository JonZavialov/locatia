import AccountIndicator from './AccountIndicator';
import './navBar.css';
import { useRef } from 'react';


function NavBar({ search }){
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formRef.current.search.value.length === 0) return
        window.location.href = '/home?search=' + formRef.current.search.value;
    }
    
    return(
        <div id="nav-bar">
            <div id="logo" onClick={() => window.location.href = ('/home')}>
                <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt="logo" id="logo" />
                <h1>Locatia</h1>
            </div>
            <form onSubmit={handleSubmit} ref={formRef} id="search-form">
                <input type="text" name="search" defaultValue={search ? search : ""} placeholder="Search" id="search-bar" />
                <button type="submit" id="search-button">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
            <AccountIndicator />
        </div>
    )
}

export default NavBar;