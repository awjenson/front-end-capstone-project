import React from 'react';

export default function LoginPage() {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}
