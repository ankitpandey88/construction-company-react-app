import React, { useState } from "react";

export default function Header({ pageName, setPageName }) {
  const [show, setShow] = useState("");

  const showNavbar = () => {
    if (show === "") {
      setShow("show");
    } else {
      setShow("");
    }
  };
  return (
    <div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
      <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
        <a href="index.html" className="navbar-brand">
          <h1 className="m-0 display-4 text-uppercase text-white">
            <i className="bi bi-building text-primary me-2"></i>WEBUILD
          </h1>
        </a>
        <button
          onClick={showNavbar}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show}`} id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a
              href=""
              className={`nav-item nav-link ${pageName === "Home" && "active"}`}
              onClick={(e) => {
                e.preventDefault();
                setPageName("Home");
              }}
            >
              Home
            </a>
            <a
              href=""
              className={`nav-item nav-link ${
                pageName === "About" && "active"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setPageName("About");
              }}
            >
              About
            </a>
            <a
              href=""
              className={`nav-item nav-link ${
                pageName === "Service" && "active"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setPageName("Service");
              }}
            >
              Service
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="project.html" className="dropdown-item">
                  Our Project
                </a>
                <a href="team.html" className="dropdown-item">
                  The Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="blog.html" className="dropdown-item">
                  Blog Grid
                </a>
                <a href="detail.html" className="dropdown-item">
                  Blog Detail
                </a>
              </div>
            </div>
            <a
              href="contact.html"
              className={`nav-item nav-link ${
                pageName === "Contact" && "active"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setPageName("Contact");
              }}
            >
              Contact
            </a>
            <a
              href="#"
              className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block"
            >
              Get A Quote <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
