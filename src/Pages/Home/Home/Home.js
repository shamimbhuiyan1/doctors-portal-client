import React from "react";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";
import Testimonals from "../Testimonals/Testimonals";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Services />
      <MakeAppoinment />
      <Testimonals />
    </div>
  );
};

export default Home;
