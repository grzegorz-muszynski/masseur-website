import React from 'react';
import './OnlineBookingBtn.css';

export default function OnlineBookingBtn({ hasBackground }) {
    const buttonClass = hasBackground ? "onlineBtn pulse" : "onlineBtn";

    return (
        <a href="https://appointment-booking-six.vercel.app/" className={buttonClass}>
            UMÓW WIZYTĘ ON-LINE
        </a>
    );
}