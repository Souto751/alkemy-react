import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import '../../style/login.css';

export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email !== "" && password !== ""){
            props.log("true");
            localStorage.setItem('logged', "true");
        }
    }

    return (
        localStorage.getItem('logged') === "false" ?
        <div className="login">
            <h1 className="login-title">Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <h3 className="input-name">Email</h3>
                <input type="email" className="login-input" placeholder="Enter your email..." onChange={(e) => {setEmail(e.target.value)}} />
                <h3 className="input-name">Password</h3>
                <input type="password" className="login-input" placeholder="Enter your password..." onChange={(e) => {setPassword(e.target.value)}} />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
        :
        <Redirect to="/alkemy-react/" />
    )
}
