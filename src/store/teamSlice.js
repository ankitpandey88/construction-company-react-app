import { createSlice } from "@reduxjs/toolkit";
import team1 from "../assets/img/team-1.jpeg";
import team2 from "../assets/img/team-2.jpeg";
import team3 from "../assets/img/team-3.jpg";
import team4 from "../assets/img/team-4.jpg";

const teams = [
  {
    img: team1,
    nam: "Jitendra Rajaram Netke",
    position: "CEO & Chairman",
  },
  {
    img: team2,
    nam: "Ashish Kumar Pandey",
    position: "CEO& Chairman",
  },

];

const teamSlice = createSlice({
  name: 'teams',
  initialState: teams,


})

export default teamSlice;
