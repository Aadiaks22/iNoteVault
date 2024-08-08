import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the username from local storage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar sticky-top bg-dark navbar-expand-lg bg-body-tertiary sticky-navbar" data-bs-theme="dark" style={{ zIndex: 1030 }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNoteVault
            <span style={{ fontSize: '0.9rem', color: 'inherit' }}> - Your Secure, Free Online Notepad</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <div className="d-flex align-items-center">
              <Link className={`nav-link text-white mx-4 ${location.pathname === "/about" ? "active" : ""}`} to="/about">Features</Link>
            </div>
            {!localStorage.getItem('token') ? <form className="d-flex" role="search">
              <Link className="btn btn-outline-light" to="/login" role="button">Login</Link>
              <Link className="btn btn-outline-light mx-2" to="/signup" role="button">SignUp</Link>
            </form> : (
              <div className="d-flex align-items-center">
                <p className="text-white mb-0 me-2">Welcome, {username}!</p>
                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
