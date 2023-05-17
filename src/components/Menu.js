import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {

    return (
        <div className="Menu">
            <ul>
                <li><NavLink to='/'>Start</NavLink></li>
                {/* <li><NavLink to='/discounts'>Promocje</NavLink></li> */}
                <li><NavLink to='/offer'>Oferta</NavLink></li>
                <li><NavLink to='/prices'>Cennik</NavLink></li>
                <li><NavLink to='/vouchers'>Vouchery</NavLink></li>
                <li><NavLink to='/forpatient'>Dla pacjenta/klienta</NavLink></li>
                <li><NavLink to='/about'>Nasz zespół</NavLink></li>
                <li><NavLink to='/opinions'>Opinie</NavLink></li>
                <li><NavLink to='/location'>Lokalizacja</NavLink></li>
                <li><NavLink to='/contact'>Kontakt/Rejestracja</NavLink></li>
            </ul>
        </div>
    )
}