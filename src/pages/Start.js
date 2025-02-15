import React from "react";
import "./Start.css";
import OnlineBookingBtn from "../components/OnlineBookingBtn";

export default function Start() {

    return (
        <div className="Start">
            <h2><span>Aneta Kubik</span></h2>
            <h2>zaprasza na zabiegi do salonu</h2>
            <h2><span>ODNOWA</span></h2>
            <h2>przy ul. Mickiewicza 3 w Miechowie</h2>
        
            <OnlineBookingBtn />
        
            <h2><span>Rejestracja tel./SMS: 57 58 57 130</span></h2>
        </div>
    )
}