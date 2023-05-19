import react from 'react';
import './Prices.css';

export default function Prices() {

    return (
        <div className='Prices'>
            <table>
                {/* <tr>
                    <th>Rodzaj masażu</th>
                    <th>Czas</th>
                    <th>Cena</th>
                </tr> */}
                <tr>
                    <td colspan="3">Masaże przeciwbólowe, medyczne</td>
                </tr>
                <tr>
                    <td>Masaż klasyczny przeciwbólowy</td>
                    <td>30 min.</td>
                    <td>70 zł</td>
                </tr>
                <tr>
                    <td>Masaż klasyczny przeciwbólowy</td>
                    <td>45 min.</td>
                    <td>100 zł</td>
                </tr>
                <tr>
                    <td>Masaż klasyczny przeciwbólowy</td>
                    <td>60 min.</td>
                    <td>130 zł</td>
                </tr>
                {/* <tr>
                    <td>Masaż klasyczny przeciwbólowy - Dmytro</td>
                    <td>30 min.</td>
                    <td>70 zł</td>
                </tr>
                <tr>
                    <td>Masaż klasyczny przeciwbólowy - Dmytro</td>
                    <td>45 min.</td>
                    <td>100 zł</td>
                </tr>
                <tr>
                    <td>Masaż klasyczny przeciwbólowy - Dmytro</td>
                    <td>60 min.</td>
                    <td>130 zł</td>
                </tr> */}
                <tr>
                    <td>Masaż tkanek głębokich (MTG)</td>
                    <td>30 min.</td>
                    <td>70 zł</td>
                </tr>
                <tr>
                    <td>Manualny drenaż limfatycznny (MDL)</td>
                    <td>45 min.</td>
                    <td>100 zł</td>
                </tr>
                <tr>
                    <td>Manualny drenaż limfatycznny (MDL)</td>
                    <td>60 min.</td>
                    <td>120 zł</td>
                </tr>
                <tr>
                    <td>Masaż leczniczy</td>
                    <td>30 min.</td>
                    <td>70 zł</td>
                </tr>
            </table>
            <table>
                <tr>
                    <td colspan="3">Masaże profilaktyczne</td>
                </tr>
                <tr>
                    <td>Masaż profilaktyczny</td>
                    <td>30 min.</td>
                    <td>100 zł</td>
                </tr>
                <tr>
                    <td>Masaż profilaktyczny</td>
                    <td>45 min.</td>
                    <td>130 zł</td>
                </tr>
                <tr>
                    <td>Masaż profilaktyczny</td>
                    <td>60 min.</td>
                    <td>150 zł</td>
                </tr>
                {/* <tr>
                    <td>Masaż profilaktyczny - Dmytro</td>
                    <td>30 min.</td>
                    <td>100 zł</td>
                </tr>
                <tr>
                    <td>Masaż profilaktyczny - Dmytro</td>
                    <td>45 min.</td>
                    <td>130 zł</td>
                </tr>
                <tr>
                    <td>Masaż profilaktyczny - Dmytro</td>
                    <td>60 min.</td>
                    <td>150 zł</td>
                </tr> */}
                <tr>
                    <td>Masaż gorącymi kamieniamni</td>
                    <td>60 min.</td>
                    <td>130 zł</td>
                </tr>
                <tr>
                    <td>Masaż balijski</td>
                    <td>60 min.</td>
                    <td>130 zł</td>
                </tr>
            </table>
            <table>
                <tr>
                    <td colspan="3">Masaże dla sportowców</td>
                </tr>
                <tr>
                    <td>Masaż sportowy</td>
                    <td>30 min.</td>
                    <td>70 zł</td>
                </tr>
                <tr>
                    <td>Masaż kreolski (bambusami)</td>
                    <td>30 min.</td>
                    <td>60 zł</td>
                </tr>
            </table>
            <table>
                <tr>
                    <td colspan="3">Masaże odprężające, pielęgnacyjne</td>
                </tr>
                <tr>
                    <td>Masaż bańką chińską</td>
                    <td>30 min.</td>
                    <td>65 zł</td>
                </tr>
                <tr>
                    <td>Masaż bańką chińską</td>
                    <td>45 min.</td>
                    <td>80 zł</td>
                </tr>
                {/* <tr>
                    <td>Masaż bańką chińską - Dmytro</td>
                    <td>30 min.</td>
                    <td>65 zł</td>
                </tr> */}
                <tr>
                    <td>Masaż Kobido face</td>
                    <td>90 min.</td>
                    <td>160 zł</td>
                </tr>
                <tr>
                    <td>Masaż gorącą świecą - Aneta</td>
                    <td>60 min.</td>
                    <td>140 zł</td>
                </tr>
                <tr>
                    <td>Masaż gorącą świecą - Dmytro</td>
                    <td>60 min.</td>
                    <td>125 zł</td>
                </tr>
            </table>
            {/* <table id="Prices__swimming">
                <tr>
                    <td colspan="3">Pływanie</td>
                </tr>
                <tr>
                    <th>Liczba osób</th>
                    <th>Czas</th>
                    <th>Cena</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>45 min.</td>
                    <td>60 zł</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>45 min.</td>
                    <td>80 zł</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>45 min.</td>
                    <td>110 zł</td>
                </tr>
            </table> */}
        </div>
    )
}