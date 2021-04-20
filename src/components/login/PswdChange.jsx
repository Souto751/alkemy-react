import React from 'react';
import {Link} from 'react-router-dom';

import '../../style/changePswd.css';

export default function PswdChange() {
    return (
        <div className="change">
            <h1 className="change-title">Change Password</h1>
            <form className="change-form">
                <h3 className="input-name">New Password</h3>
                <input type="email" className="change-input" placeholder="Enter new password..." />
                <h3 className="input-name">Confirm New Password</h3>
                <input type="password" className="change-input" placeholder="Confirm new password..." />
                <button className="btn btn-primary">Send</button>
            </form>
            <p className="to-login-line">Back to <Link className="to-login" to="/login">Login</Link></p>
        </div>
    )
}
