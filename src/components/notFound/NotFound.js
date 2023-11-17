import CopyrightFooter from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import './notfound.css';

function NotFound(){
    return(
        <>
            <NavBar />
            <div id="notfound-container">
                <div>
                    <h1>We couldn't find this page</h1>
                    <h2>But that doesn't mean you can't find your companion!</h2>
                    <button onClick={() => window.location.href = '/home'}>Go Home</button>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/404.svg'} alt="page not found" />
            </div>
            <CopyrightFooter />
        </>
    )
}

export default NotFound;