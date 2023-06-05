import './Contact.css';

export default function Contact() {

    return (
        <div id="Contact">
            <h1>Kontakt</h1>
            <p id="Contact__desc">Umów wizytę już teraz! Tak jak lubisz - telefonicznie, mailowo, przez Booksy, lub wypełniając formularz poniżej. Na pewno odpowiemy!</p>
            <div className="Contact__wrapper">
                <img src={require("../assets/smartphone.png")} />
                <p>+48 575 857 130</p>
            </div>
            <div className="Contact__wrapper">
                <img src={require("../assets/email.png")} />
                <p>anetakubik84@gmail.com</p>
            </div>

            <a href="https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow?do=invite&_branch_match_id=1016433891075084321&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL4wy9K4MMipPrUwCAFgQoA4iAAAA">Booksy - salon Odnowa, Miechów</a>

            <a href="https://booksy.com/pl-pl/180086_angel-nails-piekne-paznokcie_paznokcie_10022_zielonki/staffer/394262#ba_s=bd_1">Booksy - salon Angels Nails, Bibice</a>
            
            <form action="https://formsubmit.co/ardeo.biuro@gmail.com" method="POST">
                <div className="Contact__all-inputs">
                    <input type="name" name="Imię" placeholder="Imię" required />
                    <input type="surname" name="Nazwisko" placeholder="Nazwisko" required />
                    <input type="email" name="Adres e-mail" placeholder="Adres e-mail" required />
                </div>
                <textarea type="text" name="Treść" placeholder="Treść..." required />
                {/* Here I decide about the topic of the mail */}
                <input type="hidden" name="_subject" value="Rejestracja na zabieg" />
                {/* Link to page with thanks */}
                <input type="hidden" name="_next" value="https://strapi.ardeo-studio.pl/thanks" />

                <button type="submit">WYŚLIJ</button>
            </form>
        </div>
    )
}