import React from 'react';
import './OnlineBookingBtn.css';

export default function OnlineBookingBtn({ hasBackground, text='UMÓW WIZYTĘ ON-LINE' }) {
    const buttonClass = hasBackground ? "onlineBtn pulse" : "onlineBtn";

    return (
        <a href="https://rezerwacje.odnowa-kubik.eu/" className={buttonClass}>
            {text}
        </a>
    );
}