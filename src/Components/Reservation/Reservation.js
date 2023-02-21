import React from "react";
import './Reservation.css'

function Reservation({reservation}){

  return (
    <div className="resy-card">
        <p className="nameText">{reservation.name}</p>
        <p>{reservation.date}</p>
        <p>{reservation.time}</p>
        <p>Number of Guests: {reservation.number}</p>
    </div>
  )
}


export default Reservation