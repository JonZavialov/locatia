import getCurrentUser from "../../utils/getCurrentUser";
import signOutClient from "../../firebase-utils/auth/signOutClient";

function AccountIndicator(){
    const isLoggedIn = getCurrentUser() !== null;

    return(
        <div id="account-indicator">
            {isLoggedIn ? 
                <p>Logged in as {getCurrentUser().email}</p> 
                : 
                <p>Not logged in</p>
            }
            {isLoggedIn ? 
                <button onClick={signOutClient}>Log out</button> 
                : 
                <button onClick={() => {window.location.href='/login?mode=signin'}}>Log in</button>
            }
        </div>
    )
}

export default AccountIndicator;