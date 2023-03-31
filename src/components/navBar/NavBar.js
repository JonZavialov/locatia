import './navBar.css';

function NavBar(){
    return(
        <div id="nav-bar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/White_box_55x90.png" alt="logo" id="logo" />
            <input type="text" placeholder="Search" id="search-bar" />
            <button>Log In</button>
        </div>
    )
}

export default NavBar;