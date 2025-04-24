import React from 'react';


export default function Login() {
  return (
    <section id="login">

        <header className="auth-header">
            <h2>This feature is expected to be launched in 2026. Stay tuned!</h2>
        </header>

        <div className="auth-container">

        <p>This login form has not been implemented yet. It is for demonstration purposes only.</p>

        <form className="auth-form">
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <button
                type="submit"
                className="login-button"
                aria-label="Login Button"
                >
                Login
            </button>
        </form>

        </div>

    </section>
  );
}


