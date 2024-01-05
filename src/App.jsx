import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Corousel from "./components/Corousel";
import About from "./components/About";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import Portfolio from "./components/Portfolio";
import Team from "./components/Teams";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { useState } from "react";
import Blogs from "./components/Blogs";
import SecondaryCarousel from "./components/elements/SecondaryCarousel";
import Contact from "./components/Contact";
import Home from "./layouts/Home";
import AboutTab from "./layouts/AboutTab";
import ServicesTab from "./layouts/ServicesTab";
import ContactTab from "./layouts/ContactTab";
import { Outlet } from "react-router-dom";

function App() {
  const [pageName, setPageName] = useState("Home");
  return (
    <>
      <TopBar />
      <Header setPageName={setPageName} pageName={pageName} />
      {/* {pageName === "Home" && <Home />}
      {pageName === "About" && <AboutTab />}
      {pageName === "Service" && <ServicesTab />}
      {pageName === "Contact" && <ContactTab />} */}
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
