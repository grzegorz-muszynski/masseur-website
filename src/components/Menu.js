import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='Menu'>
            <div className="MenuBackground"></div>

            <div className='Menu__btn' onClick={()=>{setShowMenu(true)}}>
                <p>Menu</p>
                <p>|||</p>
            </div>
            
            <div className={showMenu ? 'Menu__bar' : 'Menu__bar Menu__bar-hide'} >
                <img 
                    className={showMenu ? 'Menu__close Menu_close-display' : 'Menu__close'}
                    src={require('../assets/close.png')}
                    onClick={()=>{setShowMenu(false)}}
                    alt='Zapisz się na masaż'
                />
                <ul>
                    <li><NavLink
                        onClick={()=>setShowMenu(false)}     
                        to='/'
                    >Start</NavLink></li>
                    <li><NavLink
                        onClick={()=>setShowMenu(false)}     
                        to='/offer'
                    >Oferta</NavLink></li>
                    <li><NavLink
                        onClick={()=>setShowMenu(false)}     
                        to='/prices'
                    >Cennik</NavLink></li>
                    <li><NavLink
                        onClick={()=>setShowMenu(false)}     
                        to='/vouchers'
                    >Vouchery</NavLink></li>
                    <li><NavLink
                        onClick={()=>setShowMenu(false)}     
                        to='/forpatient'
                    >Dla pacjenta/klienta</NavLink></li>
                    <li><NavLink
                        onClick={()=>setShowMenu(false)}     
                        to='/about'
                    >Nasz zespół</NavLink></li>
                    <li><NavLink
                        onClick={()=>setShowMenu(false)}     
                        to='/opinions'
                    >Opinie</NavLink></li>
                    <li><NavLink
                        onClick={()=>setShowMenu(false)}     
                        to='/location'
                    >Lokalizacja</NavLink></li>
                    <li><NavLink
                        onClick={()=>setShowMenu(false)}     
                        to='/contact'
                    >Kontakt/Rejestracja</NavLink></li>
                </ul>
            </div>
        </div>
    )
}