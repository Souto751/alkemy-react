import React from 'react';
import {Link} from 'react-router-dom';

import '../../style/login.css';

export default function Login() {
    return (
        <div className="login">
            <h1 className="login-title">Login</h1>
            <form className="login-form">
                <h3 className="input-name">Email</h3>
                <input type="email" className="login-input" placeholder="Enter your email..." />
                <h3 className="input-name">Password</h3>
                <input type="password" className="login-input" placeholder="Enter your password..." />
                <button className="btn btn-primary">Login</button>
            </form>
            <p className="to-register-line">Don't have an account? <Link className="to-register" to="/register">Register</Link></p>
            <p className="to-recover-password-line">Can't login? <Link className="to-register" to="/reset-password">Reset Password</Link></p>
        </div>
    )
}
