import React from "react";
import portfolio1 from "../assets/img/portfolio-1.jpg";
import portfolio2 from "../assets/img/portfolio-2.jpg";
import portfolio3 from "../assets/img/portfolio-3.jpg";
import portfolio4 from "../assets/img/portfolio-4.jpg";
import portfolio5 from "../assets/img/portfolio-5.jpg";
import portfolio6 from "../assets/img/portfolio-6.jpg";
import PortFolioCategory from "./elements/PortFolioCategory";
import PortfolioProject from "./elements/PortfolioProject";
export default function Portfolio() {
  const categories = [
    {
      name: "All",
      img: portfolio1,
    },
    {
      name: "Construction",
      img: portfolio2,
    },
    {
      name: "Renovation",
      img: portfolio3,
    },
  ];
  const projects = [
    {
      name: "Project name 1",
      address: "Street, New York, USA",
      img: portfolio1,
    },
    {
      name: "Project name 2",
      address: "Street, New York, USA 2",
      img: portfolio2,
    },
    {
      name: "Project name 3",
      address: "Street, New York, USA 3",
      img: portfolio3,
    },
    {
      name: "Project name 4",
      address: "Street, New York, USA 3",
      img: portfolio4,
    },
    {
      name: "Project name 5",
      address: "Street, New York, USA 3",
      img: portfolio5,
    },
    {
      name: "Project name 6",
      address: "Street, New York, USA 3",
      img: portfolio6,
    },
  ];
  return (
    <div className="container-fluid bg-light py-6 px-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
        <h1 className="display-5 text-uppercase mb-4">
          Some Of Our <span className="text-primary">Popular</span> Dream
          Projects
        </h1>
      </div>
      <div className="row gx-5">
        <div className="col-12 text-center">
          <div className="d-inline-block bg-dark-radial text-center pt-4 px-5 mb-5">
            <ul className="list-inline mb-0" id="portfolio-flters">
              {categories.map((category, index) => (
                <PortFolioCategory category={category} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row g-5 portfolio-container">
        {projects.map((project, index) => (
          <PortfolioProject project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
