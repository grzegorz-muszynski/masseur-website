import React from 'react';
import './OnlineBookingBtn.css';

export default function OnlineBookingBtn({ hasBackground, text='UMÓW WIZYTĘ ON-LINE' }) {
    const buttonClass = hasBackground ? "onlineBtn pulse" : "onlineBtn";

    return (
        <a href="https://appointment-booking-six.vercel.app/" className={buttonClass}>
            {text}
        </a>
    );
}