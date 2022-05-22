import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
const Info = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        <InfoCard
          cardTitle="Opening Hour"
          bgclass="bg-gradient-to-r from-secondary to-primary"
          img={clock}
        />
        <InfoCard
          cardTitle="Our Locations"
          bgclass="bg-[#3A4256]"
          img={marker}
        />
        <InfoCard
          cardTitle="Contact us"
          bgclass="bg-gradient-to-r from-secondary to-primary"
          img={phone}
        />
      </div>
    </div>
  );
};

export default Info;
