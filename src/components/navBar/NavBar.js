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
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/White_box_55x90.png" alt="logo" id="logo" />
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