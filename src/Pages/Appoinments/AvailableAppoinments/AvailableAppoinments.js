import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoinmentService from "../AppoinmentService/AppoinmentService";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppoinments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-10">
      <h2 className="text-xl text-secondary text-center my-12">
        Available Appoinments on: {format(date, "PP")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <AppoinmentService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppoinmentService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppoinments;
