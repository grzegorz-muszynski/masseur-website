import BuyVoucherBtn from '../components/BuyVoucherBtn';
import "./Vouchers.css";

export default function Vouchers() {

    return (
        <div className='Vouchers'>
            <h1>Karty podarunkowe</h1>

            <p>Oferujemy vouchery w formie bileciku (format DL) do odbioru osobistego  lub vouchery elektroniczne (przesyłane na  e-mail do samodzielnego wydrukowania lub przesłania). Voucher prezentowy może być na wybraną, dowolną kwotę lub na dowolne usługi z oferty (z określeniem czasu trwania usług)</p>

            <img src={require('../assets/vouchers/voucherExample.png')} alt='Możliwość zakupienia karty podarunkowej' />

            <label>Przykładowy Voucher w formie bileciku w formacie DL.</label>

            <p>Zamówienia na vouchery prosimy składać przez tel./sms: <span>57 58 57 130</span></p>
        </div>
    )
}