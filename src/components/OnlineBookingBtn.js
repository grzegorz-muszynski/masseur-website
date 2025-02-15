import React from 'react';
import './OnlineBookingBtn.css';

export default function OnlineBookingBtn({ hasBackground }) {

    console.log(hasBackground)
    const buttonClass = hasBackground ? "onlineBtn pulse" : "onlineBtn";

    return (
        <a href="https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow" className={buttonClass}>
            UMÓW WIZYTĘ ON-LINE
        </a>
    );
}