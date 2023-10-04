import './mobileView.css';

function MobileView(){
    return (
        <div id="mobile-view">
            <div id="mobile-header">
                <img src={process.env.PUBLIC_URL + '/assets/hero-logo.svg'} alt="logo"></img>
                <h1>Locatia</h1>
            </div>
            <p>
                Locatia is not yet available on mobile. Try us out on desktop!
            </p>
        </div>
    )
}

export default MobileView;