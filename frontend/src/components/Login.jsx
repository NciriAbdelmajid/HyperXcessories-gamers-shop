import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Login.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/auth/login', { email, password });
      navigate("/home");
    } catch (error) {
      setError('Sign In failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="auth">
    <div className="auth-container">

      <form className="auth-form" onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        {error && <p>{error}</p>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
        <p>If you don't have an account,</p>
        <h4 onClick={() => navigate("/register")} className="register-link">Register</h4>
      </form>
    </div>
    </div>

  );
};

export default SignIn;