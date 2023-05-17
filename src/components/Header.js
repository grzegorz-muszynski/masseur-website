import react from 'react';
import "./Header.css";
import {ReactComponent as Marka} from '../assets/logomarka.svg';

export default function Header() {

    return (
        <div className="Header">
            <Marka className='Marka' />
            <video src={require("../assets/massage.mp4")} autoPlay loop muted />
            {/* <img src={require("../assets/logomarka.svg")} alt='logo' /> */}
        </div>
    )
}
// logo's colors:
// #2C8DC1 - blue
// #9BC216 - green