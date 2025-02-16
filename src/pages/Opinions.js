import Opinion from '../components/Opinion';
import { arrayOfOpinions } from '../assets/arrayOfOpinions';
import "./Opinions.css";

export default function Opinions() {

    console.log('opinions', arrayOfOpinions[0])

    return (
        <div id="Opinions">
            <h2>Przeczytaj opinie i przekonaj się że możesz nam zaufać</h2>

            <h1>Google</h1>

            <div id="Opinions__reviews-google">
                <a href='https://g.co/kgs/ye84XZ'>
                    <img src={require('../assets/testimonials-google/opinions3.JPG')} alt='Renomowany gabinet masażu' />
                </a>
                <a href='https://g.co/kgs/FbHtBP'>
                    <img src={require('../assets/testimonials-google/opinions4.JPG')} alt='Renomowany gabinet masażu' />
                </a>
                <a href='https://g.co/kgs/WtB8mB'>
                    <img src={require('../assets/testimonials-google/opinions5.JPG')} alt='Renomowany gabinet masażu' />
                </a>
                <a href='https://g.co/kgs/c76Wvo'>
                    <img src={require('../assets/testimonials-google/opinions6.JPG')} alt='Renomowany gabinet masażu' />
                </a>
                <a href='https://g.co/kgs/UYksQM'>
                    <img src={require('../assets/testimonials-google/opinions7.JPG')} alt='Renomowany gabinet masażu' />
                </a>
                <a href='https://g.co/kgs/WHF3pd'>
                    <img src={require('../assets/testimonials-google/opinions8.JPG')} alt='Renomowany gabinet masażu' />
                </a>
                <a href='https://g.co/kgs/prsuxw'>
                    <img src={require('../assets/testimonials-google/opinions1.JPG')} alt='Renomowany gabinet masażu' />
                </a>
                <a href='https://g.co/kgs/YWGHmm'>
                    <img src={require('../assets/testimonials-google/opinions2.JPG')} alt='Renomowany gabinet masażu' />
                </a>
            </div>
            
            <h1>Opinie z rezerwacji on-line</h1>

            <div className='Opinions__reviews-others'>
                {arrayOfOpinions.length > 0 ? (
                    arrayOfOpinions.map((opi, index) => (
                        <Opinion {...arrayOfOpinions[index]} />
                    ))
                ) : null}
            </div>
            
        </div>
    )
}