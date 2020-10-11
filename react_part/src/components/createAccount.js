import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './createaccount.css'

export default class CreateAccount extends Component {
    render() {
        return (
            <div>
                <header>
                    <p>Create Account</p>
                </header>
                <div className="container">
                    <label for="name">Name:</label>
                    <input 
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                        required />
                    
                    <label for="email">E-mail:</label>
                    <input 
                        type="email"
                        placeholder="email@email.com"
                        name="email"
                        id="email"
                        required/>

                    <label for="uname">Username:</label>    
                    <input
                    type="text"
                    placeholder="Username"
                    name="uname"
                    id="uname"
                    required
                    />

                    <label for="psw">Password:</label>
                    <input
                    type="password"
                    placeholder="Password"
                    name="psw"
                    id="psw"
                    required
                    />

                    <label for="pswconfirm">Confirm password:</label>
                    <input
                    type="password"
                    placeholder="Password"
                    name="pswconfirm"
                    id="pswconfirm"
                    required
                    />

                    <div className="termsagree" align="center">
                    <input
                        type="checkbox"
                        name="termsagree"
                        id="termsagree"
                        required
                    />
                    <label className="termsagree" for="termsagree">I have read and accept the <a href="a">Privacy Terms</a>.</label>
                    </div>
                    <Link to='/auth'>
                    <button type="submit">Create my account</button>
                    </Link>
                
                </div>                
            </div>
        )
    }
}
