import "./Location.css";

export default function Location() {

    return (
        <div id="Location">
            <h2>Skorzystaj z naszych usług w jednym z dwóch lokali</h2>
            <p id="Location__desc">Świadczymy usługi na terenie nie tylko <span>Miechowa</span> ale też <span>Bibic</span>, gdzie współpracujemy z Gabinetem kosmetycznym <span>Angel Nails Piękne Paznokcie.</span></p>
            <div id="Location__wrapper">
                <div id="Location__wrapper__miechow">
                    <p>ODNOWA Aneta Kubik</p>
                    <p>+48 575 857 130</p>
                    <p>ul. Adama Mickiewicza 3</p>
                    <p>32-200 Miechów</p>
                    <p><a href="https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow?do=invite&_branch_match_id=1016433891075084321&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL4wy9K4MMipPrUwCAFgQoA4iAAAA">Zarezerwuj on-line</a></p>

                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1069.7998150357027!2d20.0270585568453!3d50.355654016701564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abf19b7fda49%3A0xe8494c0bf34587dd!2sODNOWA%20Aneta%20Kubik!5e1!3m2!1spl!2spl!4v1684327148881!5m2!1spl!2spl" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title='Gabinet masażu w Miechowie'>
                    </iframe>
                </div>

                <div id="Location__wrapper__bibice">
                    <p>Angel Nails / Odnowa</p>
                    <p>+48 514 761 539</p>
                    <p>ul. Warszawska 168</p>
                    <p>32-086 Bibice</p>
                    <p><a href="https://booksy.com/pl-pl/180086_angel-nails-piekne-paznokcie_paznokcie_10022_zielonki/staffer/394262#ba_s=bd_1">Zarezerwuj on-line</a></p>

                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d743.7676570603486!2d19.96895587413229!3d50.129893138801215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165174663a4bcf%3A0xc0d7041e4b631d5e!2sAngel%20Nails%20%2F%20Odnowa!5e1!3m2!1spl!2spl!4v1684327059806!5m2!1spl!2spl" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title='Gabinet masażu w Bibicach'>
                    </iframe>
                </div>
            </div>
        </div>
    )
}