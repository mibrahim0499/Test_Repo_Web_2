import React from 'react'
import { Link } from 'react-router-dom'

function Navigationbar() {
  return (
    <div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
    <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
      <a href="index.html" className="navbar-brand">
        <h1 className="m-0 display-4 text-uppercase text-white"><i className="bi bi-building text-primary me-2" />WEBUILD</h1>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <Link to="/About" className="nav-item nav-link">About</Link>
          <Link to="/Service" className="nav-item nav-link">Service</Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu m-0">
              <Link to="/Projects" className="dropdown-item">Our Project</Link>
              <Link to="/Team" className="dropdown-item">The Team</Link>
              <Link to="/Testimonial" className="dropdown-item">Testimonial</Link>
              {/* <a href="blog.html" className="dropdown-item">Blog Grid</a>
              <a href="detail.html" className="dropdown-item">Blog Detail</a> */}
            </div>
          </div>
          {/* <a href="Contact" className="nav-item nav-link">Contact</a> */}
          <Link to="/Contact" className="nav-item nav-link">Contact</Link>
          <a href className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Get A Quote <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navigationbar