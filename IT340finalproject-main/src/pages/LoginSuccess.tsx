import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const LoginSuccess = () => {
  // Get username from location state or localStorage
  const location = useLocation();
  const username = location.state?.username || localStorage.getItem('username') || 'User';

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🎉 Login Successful! 🎉</h1>
      <h2>Welcome back, {username}!</h2>
      <p>You have successfully logged in to your account.</p>
      <Link to="/">
        <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default LoginSuccess;
