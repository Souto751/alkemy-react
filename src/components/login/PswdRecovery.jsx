import React from 'react';
import {Link} from 'react-router-dom';

import '../../style/recoverPswd.css';

export default function PswdRecovery() {
    return (
        <div className="recover">
            <h1 className="recover-title">Recover Password</h1>
            <form className="recover-form">
                <h3 className="input-name">Email</h3>
                <input type="email" className="recover-input" placeholder="Enter your email..." />
                <button className="btn btn-primary">Send Mail</button>
            </form>
            <p className="to-login-line">Back to <Link className="to-login" to="/login">Login</Link></p>
        </div>
    )
}
