import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appoinment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
const MakeAppoinment = () => {
  return (
    <section
      style={{ background: `url(${appoinment})` }}
      className="flex justify-center items-center p-5"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appoinment</h3>
        <h2 className="text-3xl text-white ">Make an Appoinment Today</h2>
        <p className=" text-white">
          Accept whatever the scheduler tells you and offer that you are
          flexible in when you can see your doctor, which can help you get an
          appointment. - It is possible the doctor will have a few "walk-in"
          slots reserved for people to be seen at the practice. ... - Make sure
          to remain calm and courteous with the scheduler at your doctor’s
          office.
        </p>
        <PrimaryButton className="">Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppoinment;
