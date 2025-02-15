import React from 'react';
import './OnlineBookingBtn.css';

export default function OnlineBookingBtn({ hasBackground }) {
    const buttonClass = hasBackground ? "onlineBtn pulse" : "onlineBtn";

    console.log(hasBackground)
    return (
        <a href="https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow" className={buttonClass}>
            UMÓW WIZYTĘ ON-LINE
        </a>
    );
}