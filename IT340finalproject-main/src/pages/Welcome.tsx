import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Welcome = () => {
  // Get username from location state or localStorage
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || localStorage.getItem('username') || 'User';

  useEffect(() => {
    // If no token, redirect to signup
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/create-account');
    }
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🎉 Account Successfully Created! 🎉</h1>
      <h2>Welcome, {username}!</h2>
      <p>Your account has been created and you are now logged in.</p>
      <Link to="/">
        <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
