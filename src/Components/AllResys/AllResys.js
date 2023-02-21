import React from "react";
import "./AllResys.css"
import Reservation from "../Reservation/Reservation";

function AllResys({ reservations }) {

  const AllResys = reservations.map(reservation => {
    return (
      <Reservation key={reservation.name} reservation={reservation}/>
    )
  })
  return (
    <div className="all-resys">
      {AllResys}
    </div>
  )
}

export default AllResys