import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

import '../../style/login.css';


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, forceUpdate] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://challenge-react.alkemy.org/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        }).then(res => {
            return res.json()
        }).then(res => {
            if(res["error"]){alert(res["error"])}
            else{
                localStorage.setItem('token', res["token"]);
                
                forceUpdate(n => !n);
            }
        })
    }

    

    return (
        <div className="login">
            <h1 className="login-title">Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <h3 className="input-name">Email</h3>
                <input type="email" className="login-input" placeholder="Enter your email..." onChange={(e) => {setEmail(e.target.value)}} />
                <h3 className="input-name">Password</h3>
                <input type="password" className="login-input" placeholder="Enter your password..." onChange={(e) => {setPassword(e.target.value)}} />
                <button className="btn btn-primary">Login</button>
            </form>
            {localStorage.getItem('token') !== "none" ? <Redirect to="/alkemy-react" /> : ""}
        </div>
    )
}
