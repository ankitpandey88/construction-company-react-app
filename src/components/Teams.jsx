import React from "react";
import team1 from "../assets/img/team-1.jpg";
import team2 from "../assets/img/team-2.jpg";
import team3 from "../assets/img/team-3.jpg";
import team4 from "../assets/img/team-4.jpg";
import Team from "./elements/Team";
export default function Teams() {
  const teams = [
    {
      img: team1,
      nam: "Saran Zafar",
      position: "CEO & Chairman",
    },
    {
      img: team2,
      nam: "Bilal Ahmed",
      position: "Chairman",
    },
    {
      img: team3,
      nam: "Ayaz Shafaq",
      position: "Vice Chairman",
    },
    {
      img: team4,
      nam: "First Name",
      position: "CEO",
    },
  ];
  return (
    <div className="container-fluid py-6 px-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
        <h1 className="display-5 text-uppercase mb-4">
          We Are <span className="text-primary">Professional & Expert</span>
          Workers
        </h1>
      </div>
      <div className="row g-5">
        {teams.map((team, index) => (
          <Team team={team} key={index} />
        ))}
      </div>
    </div>
  );
}
