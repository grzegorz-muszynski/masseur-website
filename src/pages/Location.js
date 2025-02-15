import OnlineBookingBtn from '../components/OnlineBookingBtn';
import "./Location.css";

export default function Location() {

    return (
        <div id="Location">
            <h2>Skorzystaj z naszych usług</h2>
            <p id="Location__desc">Serdecznie zapraszamy do salonu <span>ODNOWA Aneta Kubik</span> w Miechowie. Zadzwoń do Nas, lub zarezerwuj wizytę online już dzisiaj.</p>
            <div id="Location__wrapper">
                <h3>Adres i kontakt</h3>
                <p>ul. Adama Mickiewicza 3</p>
                <p>32-200 Miechów</p>
                <p>+48 575 857 130</p>
                <OnlineBookingBtn hasBackground={true} />

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1069.7998150357027!2d20.0270585568453!3d50.355654016701564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abf19b7fda49%3A0xe8494c0bf34587dd!2sODNOWA%20Aneta%20Kubik!5e1!3m2!1spl!2spl!4v1684327148881!5m2!1spl!2spl" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title='Gabinet masażu w Miechowie'>
                </iframe>
            </div>
        </div>
    )
}