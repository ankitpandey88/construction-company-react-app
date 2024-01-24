import React, { useState } from "react";
import cr1 from "../assets/img/carousel-1.jpg";
import cr2 from "../assets/img/carousel-2.jpg";

export default function Corousel() {
  const [active, setActive] = useState(true);

  const changeCorouselContent = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className={`carousel-item ${active ? "active" : ""}`}>
              <img className="w-100" src={cr1} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <i className="fa fa-home fa-4x text-primary mb-4 d-none d-sm-block"></i>
                  <h3 className="display-2  text-white mb-md-4">
                    {/* Build Your Dream House With Us */}
                    Structural Excellence Unleashed: Fabrication, Erection, Precision – Your Vision, Our Construction
                  </h3>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                    Get A Quote
                  </a>
                </div>
              </div>
            </div>
            <div className={`carousel-item ${active ? "" : "active"}`}>
              <img className="w-100" src={cr2} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <i className="fa fa-tools fa-4x text-primary mb-4 d-none d-sm-block"></i>
                  <h1 className="display-2 text-uppercase text-white mb-md-4">
                    We Are Trusted For Your Project
                  </h1>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={changeCorouselContent}
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            onClick={changeCorouselContent}
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
