import React from 'react';
import {Link} from 'react-router-dom';

import '../../style/register.css';

export default function Register() {
    return (
        <div className="register">
            <h1 className="register-title">Register</h1>
            <form className="register-form">
                <h3 className="input-name">Email</h3>
                <input type="email" className="register-input" placeholder="Enter your email..." />
                <h3 className="input-name">Confirm Email</h3>
                <input type="email" className="register-input" placeholder="Confirm your email..." />
                <h3 className="input-name">Password</h3>
                <input type="password" className="register-input" placeholder="Enter your password..." />
                <h3 className="input-name">Confirm Password</h3>
                <input type="password" className="register-input" placeholder="Confirm your password..." />
                <button className="btn btn-primary">Register</button>
            </form>
            <p className="to-login-line-from-reg">Already have an account? <Link className="to-login" to="/login">Login</Link></p>
        </div>
    )
}
