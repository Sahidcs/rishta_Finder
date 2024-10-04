import React from 'react';
import './login.css';

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
    
    };

    return (
        <div>
            <div className="wrapper">
                <div className="logo">
                    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="Twitter Logo" />
                </div>
                <div className="text-center mt-4 name">
                    Twitter
                </div>
                <form className="p-3 mt-3" onSubmit={handleSubmit}>
                    <div className="form-field d-flex align-items-center">
                        <label htmlFor="userName" className="far fa-user"></label>
                        <input type="text" name="userName" id="userName" placeholder="Username" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <label htmlFor="pwd" className="fas fa-key"></label>
                        <input type="password" name="password" id="pwd" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn mt-3">Login</button>
                </form>
                <div className="text-center fs-6">
                    <a href="#">Forget password?</a> or <a href="#">Sign up</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
