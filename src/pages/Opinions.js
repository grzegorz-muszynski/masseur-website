import Testimonial from "../components/Testimonial";
import { AllOpinions } from "../assets/AllOpinions";
import "./Opinions.css";

import { useEffect, useState } from "react";

export default function Opinions() {
    // const url = `https://mybusiness.googleapis.com/v4/accounts/{16316251523711171230}/locations/{ChIJnwkhEdgrF0cRwMAwqQIE5uA}/reviews`;
    // const url = `https://mybusiness.googleapis.com/v4/accounts/{49761590256-2h8c29r6ooqt54bfir3sb10u2dir6mui.apps.googleusercontent.com}/locations/{ChIJnwkhEdgrF0cRwMAwqQIE5uA}/reviews`;
    // const [data, setData] = useState([])

    // const fetchData = async () => {
    //     try {
    //         const res = await fetch(url)
    //         const dataObject = await res.json()
    //         const json = await Object.entries(dataObject.data)

    //         console.log('data: ')
    //         console.log('data: ', json)
    //         setData(json)
    //     } catch (error) {
    //         console.log('Error!')
    //     }
    // }

    // {fetchData()}

    return (
        <div id="Opinions">
            <h2>Przeczytaj opinie i przekonaj się że możesz nam zaufać</h2>
            {/* {fetchData()} */}

            {/* DELETE ALSO TESTIMONIAL COMPONENT FROM COMPONENTS FOLDER */}
            
            {/* <Testimonial 
                text={AllOpinions[0].text} 
                name={AllOpinions[0].name} 
                date={AllOpinions[0].date} 
            />
            <Testimonial 
                text={AllOpinions[1].text} 
                name={AllOpinions[1].name} 
                date={AllOpinions[1].date} 
            /> */}
            {/* <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/148697' frameborder='0' width='100%' height='1000'></iframe> */}
            {/* <h3>Opinie z serwisu <span>Google</span></h3> */}
            {/* <img id='google'  src={require("../assets/google-logo.png")} /> */}

            <h1>Google</h1>


            <div id="Opinions__reviews-google">
                {/* <img src={require('../assets/testimonials/opinion1.JPG')} />
                <img src={require('../assets/testimonials/opinion2.JPG')} /> */}
                <a href='https://g.co/kgs/ye84XZ'>
                    <img src={require('../assets/testimonials-google/opinions3.JPG')} />
                </a>
                <a href='https://g.co/kgs/FbHtBP'>
                    <img src={require('../assets/testimonials-google/opinions4.JPG')} />
                </a>
                <a href='https://g.co/kgs/WtB8mB'>
                    <img src={require('../assets/testimonials-google/opinions5.JPG')} />
                </a>
                <a href='https://g.co/kgs/c76Wvo'>
                    <img src={require('../assets/testimonials-google/opinions6.JPG')} />
                </a>
                <a href='https://g.co/kgs/UYksQM'>
                    <img src={require('../assets/testimonials-google/opinions7.JPG')} />
                </a>
                <a href='https://g.co/kgs/WHF3pd'>
                    <img src={require('../assets/testimonials-google/opinions8.JPG')} />
                </a>
                <a href='https://g.co/kgs/prsuxw'>
                    <img src={require('../assets/testimonials-google/opinions1.JPG')} />
                </a>
                <a href='https://g.co/kgs/YWGHmm'>
                    <img src={require('../assets/testimonials-google/opinions2.JPG')} />
                </a>
            </div>

            <a id="Opinions__button" href='https://www.google.com/search?q=ondowa+miech%C3%B3w&sxsrf=APwXEdfFV9YWczulIK2gx2hPdTqlQfC_5g%3A1685515950070&ei=ru52ZN3wA7Kl5NoP5OueQA&ved=0ahUKEwjd_92b_J7_AhWyElkFHeS1BwgQ4dUDCA8&uact=5&oq=ondowa+miech%C3%B3w&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQsAIQJzIHCCMQsAIQJzIHCCMQsAIQJzINCC4QDRCABBDHARCvAToKCCMQsAIQsAMQJzoGCAAQHhANSgQIQRgBULUCWPUDYMoFaAJwAHgAgAGqAYgBzwKSAQMwLjKYAQCgAQHAAQHIAQE&sclient=gws-wiz-serp#lrd=0x4717abf19b7fda49:0xe8494c0bf34587dd,3,,,,'>Dodaj opinię</a>
            
            <h1>Booksy</h1>
            <div id='Opinions__reviews-booksy'>
                <a href='https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow'>
                    <img src={require('../assets/testimonials-booksy/review64.JPG')} />
                </a>
                <a href='https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow'>
                    <img src={require('../assets/testimonials-booksy/review63.JPG')} />
                </a>
                <a href='https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow'>
                    <img src={require('../assets/testimonials-booksy/review62.JPG')} />
                </a>
                <a href='https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow'>
                    <img src={require('../assets/testimonials-booksy/review61.JPG')} />
                </a>
                <a href='https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow'>
                    <img src={require('../assets/testimonials-booksy/review60.JPG')} />
                </a>
                <a href='https://booksy.com/pl-pl/86946_odnowa_masaz_10052_miechow'>
                    <img src={require('../assets/testimonials-booksy/review46.JPG')} />
                </a>
            </div>
            
        </div>
    )
}