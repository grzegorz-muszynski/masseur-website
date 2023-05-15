import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {

    return (
        <div className="Menu">
            <ul>
                <li><NavLink to='/'>Start</NavLink></li>
                <li><NavLink to='/offer'>Oferta</NavLink></li>
                <li><NavLink to='/prices'>Cennik</NavLink></li>
                <li><NavLink to='/vouchery'>Vouchery</NavLink></li>
                <li><NavLink to='/forpatient'>Dla pacjenta</NavLink></li>
                <li><NavLink to='/about'>O nas</NavLink></li>
                <li><NavLink to='/opinions'>Opinie</NavLink></li>
                <li><NavLink to='/localisation'>Lokalizacja</NavLink></li>
                <li><NavLink to='/contact'>Kontakt</NavLink></li>
            </ul>
        </div>
    )
}