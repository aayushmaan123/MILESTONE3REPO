import React, { useEffect, useState } from 'react';
// Home page that fetches user info using the stored JWT
function Home() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Not logged in.');
      return;
    }
    // Fetch user info from backend
    fetch('http://localhost:5000/me', {
      headers: { 'Authorization': 'Bearer ' + token },
    })
      .then(res => res.json())
      .then(data => {
        if (data.username) {
          setUser(data);
        } else {
          setMessage('Invalid or expired token.');
        }
      })
      .catch(() => setMessage('Error fetching user info.'));
  }, []);

  if (user) {
    return <h2>Welcome, {user.username}!</h2>;
  }
  return <div>{message || 'Loading...'}</div>;
}

export default Home;
