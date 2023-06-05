import "./Header.css";
import {ReactComponent as Marka} from '../assets/logomarka.svg';

export default function Header() {

    return (
        <div id="Header">
            <Marka className='Marka' />
            <video src={require("../assets/massage.mp4")} type="video/mp4" autoPlay loop muted />

            <div id="Header__icons">
                <a href='https://www.facebook.com/OdnowaAnetaKubik/'>
                    <img src={require("../assets/facebook.png")} alt='logo-faceobook' />
                </a>

                <a href='https://www.instagram.com/odnowa_aneta_kubik/'>
                    <img src={require("../assets/instagram.png")} alt='logo-instagram' />
                </a>

                <a href='https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow'>
                    <img src={require("../assets/booksyGreen.png")} alt='logo-booksy' />
                </a>
            </div>
        </div>
    )
}