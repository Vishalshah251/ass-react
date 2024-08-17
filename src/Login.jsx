import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Optional if you want to separate CSS for Login

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/logout');
  }

  return (
    <div className='log'>
      <header>
        <b>Navigation</b>
        <button onClick={handleLogin}>Login</button>
      </header>
      <div className="banner">
        <p>Public View</p>
      </div>
      <footer>
        <b>Footer</b>
      </footer>
    </div>
  );
}

export default Login;
