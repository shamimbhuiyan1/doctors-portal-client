import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box ">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary text-center">
            Booking for : {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 justify-items-center mt-3"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs my-3"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              class="input input-bordered w-full max-w-xs "
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              class="input input-bordered w-full max-w-xs "
            />
            <input
              type="text"
              name="phone number"
              required
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs "
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Type here"
              class="btn btn-secondary w-full max-w-xs my-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
