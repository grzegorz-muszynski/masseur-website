import Testimonial from "../components/Testimonial";
import { AllOpinions } from "../assets/AllOpinions";
import "./Opinions.css";

export default function Opinions() {

    return (
        <div id="Opinions">
            <h2>Przeczytaj opinie i przekonaj się że możesz nam zaufać</h2>
            <div id="Opinions__separator">* * * * *</div>
            <Testimonial 
                text={AllOpinions[0].text} 
                name={AllOpinions[0].name} 
                date={AllOpinions[0].date} 
            />
            <Testimonial 
                text={AllOpinions[1].text} 
                name={AllOpinions[1].name} 
                date={AllOpinions[1].date} 
            />
            <img src={require('../assets/opinion1.JPG')} />
            <img src={require('../assets/opinion2.JPG')} />
        </div>
    )
}