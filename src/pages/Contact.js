import OnlineBookingBtn from '../components/OnlineBookingBtn';
import './Contact.css';

export default function Contact() {

    return (
        <div id="Contact">
            <h1>Kontakt</h1>
            <p id="Contact__desc">Umów wizytę już teraz! Tak jak lubisz - telefonicznie, mailowo, on-line lub wypełniając formularz poniżej. Na pewno odpowiemy!</p>
            <div className="Contact__wrapper">
                <img src={require("../assets/contact/smartphone.png")} alt='Umów wizytę w gabinecie masażu' />
                <p>+48 575 857 130</p>
            </div>
            <div className="Contact__wrapper">
                <img src={require("../assets/contact/email.png")} alt='Umów masaż mailowo' />
                <p>anetakubik84@gmail.com</p>
            </div>

            <OnlineBookingBtn hasBackground={true} />
            
            <form action="https://formsubmit.co/0c52b8f8e1db2e69954b1db9a271c054" method="POST">
                <div className="Contact__all-inputs">
                    <input type="name" name="Imię" placeholder="Imię" required />
                    <input type="surname" name="Nazwisko" placeholder="Nazwisko" required />
                    <input type="email" name="Adres e-mail" placeholder="Adres e-mail" required />
                </div>
                <textarea type="text" name="Treść" placeholder="Treść..." required />
                <input type="hidden" name="_subject" value="Rejestracja na zabieg" />
                <input type="hidden" name="_next" value="https://odnowa-kubik.eu/thanks" />
                <button type="submit">WYŚLIJ</button>
            </form>
        </div>
    )
}