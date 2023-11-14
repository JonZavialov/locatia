import React from 'react'
import NavBar from '../navBar/NavBar'
import CopyrightFooter from '../footer/Footer'
import { useNavigate } from 'react-router'
import "./editProfile.css"

function EditProfile() {
    let navigate = useNavigate()
    // fetch data here. This component will receive uuid.
    // let {id} = useParams()
    const imgURL = "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let username = "John doe"
    return (
        <>
        <NavBar />
        <div id="editProfile-container">
            <div id="profileImage-container">
                <img src={imgURL} alt="Profile Pictire" />
                <p>@{username}</p>
            </div>
            <h3>Edit Profile</h3>
            <button onClick={() => navigate('/profile/' + "rujhanuser1")} id="btn" >Edit Personal Information</button>
            {/* insert onClick function to addtional information page */}
            <button id="btn">Add More Information</button>
            <h3>Credentials</h3>
            <form id="credentials-form">
                <label for="username">Change Username</label>
                <input type="text" id="username" name="username" placeholder="New Username" />
                <button id="btn">Submit</button>
            </form>
            <form id="credentials-form">
                <label for="password">Change Password</label>
                <input type="text" id="password" name="password" placeholder="New Password" />
                <button id="btn">Submit</button>
            </form>
        </div>
        <CopyrightFooter />
        </>
    )
}

export default EditProfile