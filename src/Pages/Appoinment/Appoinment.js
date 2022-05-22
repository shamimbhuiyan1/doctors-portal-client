import React, { useState } from "react";
import AppoimentBanner from "../AppoinmentBanner/AppoimentBanner";
import AvailableAppoinments from "../AvailableAppoinments/AvailableAppoinments";
import Footer from "../Shared/Footer/Footer";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoimentBanner date={date} setDate={setDate} />
      <AvailableAppoinments date={date} setDate={setDate} />
      <Footer />
    </div>
  );
};

export default Appoinment;
