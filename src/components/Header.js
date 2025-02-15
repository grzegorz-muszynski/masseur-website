import "./Header.css";
import {ReactComponent as Logo} from '../assets/header/logomarka.svg';
import OnlineBookingBtn from "./OnlineBookingBtn";

export default function Header() {

    return (
        <div id="Header">
            <video src={require('../assets/header/massage.mp4')} type="video/mp4" autoPlay loop muted playsInline alt="Masaż relaksacyjny, leczniczy Miechów" />
            <div id="Header__wrapper">
                <Logo className='Logo' />

                <div id="Header__wrapper__icons">
                    <a href='https://www.facebook.com/OdnowaAnetaKubik/'>
                        <img src={require("../assets/header/facebook.png")} alt='Masażysta Miechów' />
                    </a>

                    <a href='https://www.instagram.com/odnowa_aneta_kubik/'>
                        <img src={require("../assets/header/instagram.png")} alt='Masaż' />
                    </a>
                    <OnlineBookingBtn hasBackground={false}/>
                    {/* <img src={require("../assets/header/booksyGreen.png")} alt='Masaż Booksy' /> */}
                </div>
            </div>
        </div>
    )
}