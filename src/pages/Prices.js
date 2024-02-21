import './Prices.css';

export default function Prices() {
    
    return (
        <div className='Prices'>
            <h3>Nasz cennik</h3>
            <table>
                <tbody>
                    <tr>
                        <td>30 min.</td>
                        <td>80 zł</td>
                    </tr>
                    <tr>
                        <td>45 min.</td>
                        <td>110 zł</td>
                    </tr>
                    <tr>
                        <td>60 min.</td>
                        <td>140 zł</td>
                    </tr>
                    <tr>
                        <td>75 min.</td>
                        <td>160 zł</td>
                    </tr>
                    <tr>
                        <td>90 min.</td>
                        <td>180 zł</td>
                    </tr>
                </tbody>   
            </table>
        </div>
    )
}