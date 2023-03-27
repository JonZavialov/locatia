import authorizeClient from '../../firebase-utils/auth/authorizeClient.js';
import React from 'react';

export default class Login extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        authorizeClient(e.target.email.value, e.target.password.value)
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
