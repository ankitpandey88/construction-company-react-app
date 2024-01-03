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

function App() {
  const [pageName, setPageName] = useState("Home");
  return (
    <>
      <TopBar />
      <Header setPageName={setPageName} pageName={pageName} />

      {pageName === "Home" ? (
        <Corousel />
      ) : (
        <SecondaryCarousel pageName={pageName} />
      )}
      {(pageName === "Home" || pageName === "About") && <About />}
      {(pageName === "Home" || pageName === "Service") && <Services />}
      {(pageName === "Home" ||
        pageName === "About" ||
        pageName === "Service") && <Appointment />}
      {pageName === "Home" && <Portfolio />}

      {(pageName === "Home" || pageName === "About") && <Team />}
      {(pageName === "Home" || pageName === "Service") && <Testimonial />}
      {pageName === "Home" && <Blogs />}
      <Footer />
    </>
  );
}
export default App;
