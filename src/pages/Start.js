import React from "react";
import "./Start.css";
import OnlineBookingBtn from "../components/OnlineBookingBtn";

export default function Start() {

    return (
        <div className="Start">
            <h2>Zapraszamy na zabiegi masażu do Salonu Odnowa.</h2>
            <h2><span>Miechów, ul. A. Mickiewicza 3</span></h2>
            <h2><span>Rejestracja tel./SMS: 57 58 57 130</span></h2>
            <OnlineBookingBtn hasBackground={true} />
        </div>
    )
}