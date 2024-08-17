import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'; // Optional if you want to separate CSS for Logout

function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/login');
  }

  return (
    <div className='out'>
      <header>
        <b>Navigation</b>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <div className="banner">
        <p>Private View</p>
      </div>
      <footer>
        <b>Footer</b>
      </footer>
    </div>
  );
}

export default Logout;
