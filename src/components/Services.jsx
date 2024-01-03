import React from "react";
import services1 from "../assets/img/service-1.jpg";
import services2 from "../assets/img/service-2.jpg";
import services3 from "../assets/img/service-3.jpg";
import services4 from "../assets/img/service-4.jpg";
import services5 from "../assets/img/service-5.jpg";
import services6 from "../assets/img/service-6.jpg";
import Service from "./elements/Service";
export default function Services() {
  const services = [
    {
      serviceImg: services1,
      title: "Web Design",
      logo: "fa-home",
      body: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae sint, labore obcaecati facilis quo soluta praesentium repudiandae dolor officia, iste repellat hic et earum architecto rem! Quisquam, laboriosam et?",
    },
    {
      serviceImg: services2,
      title: "Web Design 2",
      logo: "fa-drafting-compass",
      body: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae sint, labore obcaecati facilis quo soluta praesentium repudiandae dolor officia, iste repellat hic et earum architecto rem! Quisquam, laboriosam et?",
    },
    {
      serviceImg: services3,
      title: "Web Design 3",
      logo: "fa-palette ",
      body: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae sint, labore obcaecati facilis quo soluta praesentium repudiandae dolor officia, iste repellat hic et earum architecto rem! Quisquam, laboriosam et?",
    },
  ];
  return (
    <div className="container-fluid bg-light py-6 px-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
        <h1 className="display-5 text-uppercase mb-4">
          We Provide <span className="text-primary">The Best</span> Construction
          Services
        </h1>
      </div>
      <div className="row g-5">
        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </div>
    </div>
  );
}
