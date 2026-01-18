import './Prices.css';

export default function Prices() {
    
    return (
        <div className='Prices'>
            <h3>Nasz cennik</h3>
            <table>
                <tbody>
                    <tr>
                        <td>15 min.</td>
                        <td>50 zł</td>
                    </tr>
                    <tr>
                        <td>30 min.</td>
                        <td>100 zł</td>
                    </tr>
                    <tr>
                        <td>45 min.</td>
                        <td>140 zł</td>
                    </tr>
                    <tr>
                        <td>60 min.</td>
                        <td>180 zł</td>
                    </tr>
                    <tr>
                        <td>75 min.</td>
                        <td>220 zł</td>
                    </tr>
                    <tr>
                        <td>90 min.</td>
                        <td>250 zł</td>
                    </tr>
                </tbody>   
            </table>
            <p>Czas masażu jest orientacyjny (tzn. obejmuje całą wizytę pacjenta/klienta)</p>
        </div>
    )
}