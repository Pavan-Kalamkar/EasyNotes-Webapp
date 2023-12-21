import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './css/Navbar.css'

const Navbar = () => {

  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    navigate("/login")
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <p className="navbar-brand m-0 mx-4" >EasyNotes <i className="fa-regular fa-note-sticky mx-1"></i></p>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
            <li className="nav-item">
              <Link className="nav-link links " to="/">Home</Link>
            </li>
          </ul>

          {!localStorage.getItem("authtoken") ? <form classNameName="d-flex" role="search">
            <Link className="links me-2" to="/login" role="button">Signin</Link>
            <Link className="links me-2" to="/signup" role="button">Signup</Link>
          </form> : <div><button className="logout me-2" onClick={handleLogout}>Logout</button></div>}

          <Link className="links me-4" to="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar