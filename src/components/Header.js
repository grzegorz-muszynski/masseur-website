import react from 'react';
import "./Header.css";

export default function Header() {

    return (
        <div className="Header">
            <video src={require("../assets/massage.mp4")} autoPlay loop muted />
        </div>
    )
}