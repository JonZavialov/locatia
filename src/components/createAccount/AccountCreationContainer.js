import getCurrentUser from "../../utils/getCurrentUser"

function AccountCreationContainer(){
    return(
        <p>Welcome {getCurrentUser()}!</p>
    )
}

export default AccountCreationContainer