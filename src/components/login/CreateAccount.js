import React from 'react';
import createAccountWithEmail from '../../firebase-utils/auth/createAccount/createAccountWithEmail';

export default class CreateAccount extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        createAccountWithEmail(e.target.email.value, e.target.password.value)
        // TODO: add username to user profile
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}