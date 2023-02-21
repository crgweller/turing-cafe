import React from "react";
import './Reservation.css'

function Reservation({reservation}){

  return (
    <div className="resy-card">
        <p>{reservation.id}</p>
        <p>{reservation.name}</p>
        <p>{reservation.date}</p>
        <p>{reservation.time}</p>
        <p>{reservation.number}</p>
    </div>
  )
}


export default Reservation