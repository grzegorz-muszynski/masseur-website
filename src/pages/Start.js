import React from "react";
import "./Start.css";

export default function Start() {

    return (
        <div className="Start">
            <h2><span>Aneta Kubik</span></h2>
            <h2>zaprasza na zabiegi do salonu</h2>
            <h2><span>ODNOWA</span></h2>
            <h2>przy ul. Mickiewicza 3 w Miechowie</h2>
        
            {/* <h3>Godziny pracy:</h3>
            <p>6 dni w tygodniu</p>
            <p>pon.-pt.: 8:00 - 20:00</p> */}
            <p>Pracujemy 6 dni w tygodniu. Aktualny grafik i godziny otwarcia są dostępne na naszej <a href="https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow">wizytówce</a> w portalu Booksy.</p>
        
            <h3>Rejestracja</h3>
            <p>+48 575 857 130</p>
            <p>anetakubik84@gmail.com</p>
        </div>
    )
}