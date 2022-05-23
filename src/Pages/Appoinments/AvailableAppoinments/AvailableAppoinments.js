import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import AppoinmentService from "../AppoinmentService/AppoinmentService";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppoinments = ({ date }) => {
  const formattedDate = format(date, "PP");
  const [treatment, setTreatment] = useState(null);
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }

  //iniatially evabe korbo

  /* const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedDate]); */
  return (
    <div className="my-12">
      <h2 className="text-xl text-secondary text-center my-12">
        Available Appoinments on: {format(date, "PP")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
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
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppoinments;
