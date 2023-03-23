import React from 'react';
import createAccount from '../../firebase-utils/createAccount';

export default class CreateAccount extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        createAccount(e.target.email.value, e.target.password.value)
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