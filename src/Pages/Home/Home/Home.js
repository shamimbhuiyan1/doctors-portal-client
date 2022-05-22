import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Info from "../../Home/Info/Info";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";
import Testimonals from "../Testimonals/Testimonals";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppoinment />
      <Testimonals />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
