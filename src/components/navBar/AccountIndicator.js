import getCurrentUser from "../../utils/getCurrentUser";
import signOutClient from "../../firebase-utils/auth/signOutClient";

function AccountIndicator(){
    const isLoggedIn = getCurrentUser() !== null;

    return(
        <div id="account-indicator">
            {isLoggedIn && <p>{getCurrentUser().email}</p>}
            {/* TODO: make this username instead */}
            {isLoggedIn ? 
                <button onClick={signOutClient}>Log out</button> 
                : 
                <button onClick={() => {window.location.href='/login?mode=signin'}}>Log in</button>
            }
        </div>
    )
}

export default AccountIndicator;